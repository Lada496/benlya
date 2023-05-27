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
      if (existingUser) {
        res.status(200).json({ wishlist: existingUser.wishlist });
      } else {
        res.status(200).json({ wishlist: null });
      }
    } catch (error) {
      res.status(422).json({ message: "Wishlist data fetch failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
