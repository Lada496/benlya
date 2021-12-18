import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../lib/db-utils";
async function handler(req, res) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    try {
      const existingUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      console.log(existingUser);
      res.status(200).json({ wishlist: existingUser.wishlist });
    } catch (error) {
      client.close();
      res.status(422).json({ message: "Wishlist data fetch failed" });
    }
  }
  if (req.method === "PATCH") {
    const client = await connectToDatabase();
    const db = client.db();
    const wishlist = req.body.wishlist;
    const usersCollection = db.collection("users");
    try {
      const result = await usersCollection.updateOne(
        { email: session.user.email },
        { $set: { wishlist } }
      );
      client.close();
      res.status(200).json({ message: "Wishlist updated" });
    } catch (error) {
      client.close();
      res.status(422).json({ message: "Wishlist update failed" });
    }
  }
}

export default handler;
