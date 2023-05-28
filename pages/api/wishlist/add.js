import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db-utils";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(200).json({ message: "Not authenticated!" });
    return;
  }
  if (req.method === "PATCH") {
    const client = await connectToDatabase();
    const db = client.db();
    const wishlist = req.body;
    const usersCollection = db.collection("users");
    try {
      await usersCollection.updateOne(
        { email: session.user.email },
        { $push: { wishlist } }
      );
      const updatedUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      res.status(200).json({ wishlist: updatedUser.wishlist });
    } catch (error) {
      res.status(422).json({ message: "Wishlist update failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
