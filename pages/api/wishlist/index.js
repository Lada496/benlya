import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db-utils";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(200).json({ message: "Not authenticated!", wishlist: [] });
    return;
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();
    try {
      const existingUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      res.status(200).json({ wishlist: existingUser.wishlist });
    } catch (error) {
      res.status(422).json({ message: "Wishlist data fetch failed" });
    } finally {
      client.close();
    }
  }
  if (req.method === "DELETE") {
    const client = await connectToDatabase();
    const db = client.db();
    try {
      await db
        .collection("users")
        .updateOne({ email: session.user.email }, { $set: { wishlist: [] } });

      res.status(200).json({ wishlist: [] });
    } catch (error) {
      res.status(422).json({ message: "Wishlist reset failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
