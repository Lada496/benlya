import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]";
import { connectToDatabase } from "../../../../lib/db-utils";
import { removeItemFromCart } from "../../../../../redux/slice/cart/cart.util";

async function handler(req, res) {
  const session = await getServerSession(req, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  if (req.method === "DELETE") {
    const client = await connectToDatabase();
    const db = client.db();
    const cartItemToRemove = req.body.cartItemToRemove;

    try {
      const existingUser = await db
        .collection("users")
        .findOne({ email: session.user.email });

      const cartItems = existingUser.cart;
      const updatedCartItems = removeItemFromCart(cartItems, cartItemToRemove);
      await db
        .collection("users")
        .updateOne(
          { email: session.user.email },
          { $set: { cart: updatedCartItems } }
        );
      res.status(200).json({ cart: updatedUser.cart });
    } catch (error) {
      res.status(422).json({ message: "Delete the cart idem failed" });
    } finally {
      client.close();
    }
  }
}

export default handler;
