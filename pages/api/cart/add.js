import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db-utils";
import { addItemToCart } from "../../../redux/api/cart/cart.util";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  if (req.method === "PATCH") {
    const client = await connectToDatabase();
    const db = client.db();
    const cartItemToAdd = req.body;
    const usersCollection = db.collection("users");
    try {
      const existingUser = await db
        .collection("users")
        .findOne({ email: session.user.email });
      const currentCartItems = existingUser.cart;
      let cartItems = [];
      if (existingUser && currentCartItems) {
        cartItems = currentCartItems;
      }

      const updatedCartItems = addItemToCart(cartItems, cartItemToAdd);

      await usersCollection.updateOne(
        { email: session.user.email },
        { $set: { cart: updatedCartItems } }
      );
      const updatedUser = await db
        .collection("users")
        .findOne({ email: session.user.email });

      res.status(200).json({ cart: updatedUser.cart });
    } catch (error) {
      res.status(422).json({ message: "Cart data update failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
