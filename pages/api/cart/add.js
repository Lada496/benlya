import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../lib/db-utils";
import { addItemToCart } from "../../../redux/slice/cart/cart.util";

async function handler(req, res) {
  const session = await getServerSession(req, authOptions);
  console.log({ session });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  if (req.method === "PATCH") {
    const client = await connectToDatabase();
    const db = client.db();
    const cartItemToAdd = req.body.cartItemToAdd.id;

    try {
      const usersCollection = db.collection("users");
      const cartItems = usersCollection.cart;

      const updatedCartItems = addItemToCart(cartItems, cartItemToAdd);

      await db.usersCollection.updateOne(
        { email: session.user.email },
        { $set: { cart: updatedCartItems } }
      );
    } catch (error) {
      client.close();
      res.status(422).json({ message: "Cart data fetch failed" });
    }
  }
}

export default handler;
