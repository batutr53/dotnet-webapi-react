namespace API.Entity;

public class Cart{
    public int Id { get; set; }
    public string CustomerId { get; set; }
    public List<CartItem> CartItems { get; set; } = new List<CartItem>();

    public void addItem(int productId, int quantity){
        var existingItem = CartItems.FirstOrDefault(x => x.ProductId == productId);
        if(existingItem == null){
            CartItems.Add(new CartItem{
                ProductId = productId,
                Quantity = quantity
            });
        }else{
            existingItem.Quantity += quantity;
        }
    }

    public void removeItem(int productId, int quantity){
        var existingItem = CartItems.FirstOrDefault(x => x.ProductId == productId);
  if(existingItem == null) return;
  existingItem.Quantity -= quantity;
        if(existingItem.Quantity <= 0){
            CartItems.Remove(existingItem);
        }
    }
}

public class CartItem{
    public int Id { get; set; }
    public int Quantity { get; set; }
    public int CartId { get; set; }
    public Cart Cart { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; }

}