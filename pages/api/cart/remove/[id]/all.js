import { getServerSession } from "next-auth";
import authOptions from "../../../auth/[...nextauth]";
import { connectToDatabase } from "../../../../../lib/db-utils";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  if (req.method === "POST") {
    const client = await connectToDatabase();
    const db = client.db();
    try {
      // Remove the targeted cart item from the user's cart array using $pull
      await db
        .collection("users")
        .updateOne(
          { email: session.user.email },
          { $pull: { cart: { id: req.body.id } } }
        );

      // Fetch the updated user document
      const updatedUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      res.status(200).json({ cart: updatedUser.cart });
    } catch (error) {
      client.close();
      res.status(422).json({ message: "Cart item removal failed" });
    }
  }
}

export default handler;
