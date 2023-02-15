export default function CartItem({
  itemName,
  itemCost,
  amountInCart,
  remainingItems,
}) {
  return (
    <>
      <div>Item Name:{itemName}</div>
      <div>Item Cost: {itemCost}</div>
      <div>Item Amount: {amountInCart}</div>
      <div>Items Remaining: {remainingItems}</div>
    </>
  );
}
