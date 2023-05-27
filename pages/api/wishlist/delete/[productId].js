import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]";
import { connectToDatabase } from "../../../../lib/db-utils";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(200).json({ message: "Not authenticated!" });
    return;
  }
  if (req.method === "DELETE") {
    const client = await connectToDatabase();
    const db = client.db();
    const productId = req.query.productId;
    console.log(req);
    const usersCollection = db.collection("users");
    try {
      await usersCollection.updateOne(
        { email: session.user.email },
        { $pull: { wishlist: { id: +productId } } }
      );
      const updatedUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      console.log({ updatedUser });
      res.status(200).json({ wishlist: updatedUser.wishlist });
    } catch (error) {
      res.status(422).json({ message: "Delete the wishlist idem failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
