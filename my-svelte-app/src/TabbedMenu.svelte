<script>
  let activeTab = 0;

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Spring Rolls", description: "Crispy rolls with veggies", price: "5.99" },
        { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: "4.50" },
        { name: "Bruschetta", description: "Grilled bread with tomato & basil", price: "6.00" }
      ]
    },
    {
      name: "Main Courses",
      items: [
        { name: "Grilled Chicken", description: "Served with veggies & sauce", price: "12.99" },
        { name: "Pasta Alfredo", description: "Creamy white sauce with fettuccine", price: "10.50" },
        { name: "Steak", description: "Juicy steak cooked to perfection", price: "18.99" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Cake", description: "Rich & moist with dark chocolate", price: "6.99" },
        { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "7.50" },
        { name: "Ice Cream", description: "Assorted flavors available", price: "4.99" }
      ]
    }
  ];

  function switchTab(index) {
    activeTab = index;
  }

  const formatPrice = (price) => new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
}).format(price);

</script>

<style>
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .tab-button {
    padding: 10px;
    border: none;
    background: lightgray;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  .tab-button.active {
    background: #ff5722;
    color: white;
  }

  .menu-items {
    padding: 0;
    list-style: none;
  }

  .menu-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .menu-item h3 {
    margin: 0;
    font-size: 20px;
  }

  .menu-item p {
    margin: 5px 0;
    font-size: 14px;
    color: gray;
  }

  .price {
    font-weight: bold;
    color: #ff5722;
  }
</style>

<div>
  <!-- Tab Buttons -->
  <div class="tabs">
    {#each menuCategories as category, index}
      <button 
        class="tab-button {activeTab === index ? 'active' : ''}" 
        on:click={() => switchTab(index)}>
        {category.name}
      </button>
    {/each}
  </div>

  <!-- Display Menu Items -->
  <ul class="menu-items">
    {#each menuCategories[activeTab].items as item}
      <li class="menu-item">
        <h3>{item.name} <span class="price">{formatPrice(item.price)}</span></h3>
        <p>{item.description}</p>
      </li>
    {/each}
  </ul>
</div>

