import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db-utils";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(200).json({ message: "Not authenticated!", cart: [] });
    return;
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    try {
      const existingUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      if (!existingUser) {
        res.status(200).json({ message: "Not logged in" });
      }

      const cart = existingUser.cart || []; // Set cart to an empty array if it doesn't exist
      res.status(200).json({ cart: cart });
    } catch (error) {
      res.status(422).json({ message: "Cart data fetch failed" });
    } finally {
      client.close();
    }
  }
  if (req.method === "DELETE") {
    const client = await connectToDatabase();
    const db = client.db();
    const usersCollection = db.collection("users");

    try {
      // Reset the user's cart to an empty array
      await usersCollection.updateOne(
        { email: session.user.email },
        { $set: { cart: [] } }
      );

      res.status(200).json({ cart: [] });
    } catch (error) {
      res.status(422).json({ message: "Cart reset failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
