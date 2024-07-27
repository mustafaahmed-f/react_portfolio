function CategoryBtnComponent({ fn, category, currentCategory }) {
  return (
    <button
      onClick={() => fn()}
      className={`px-3 py-1 text-white rounded-full cursor-pointer ${
        category === currentCategory ? "bg-secondaryColor" : "bg-transparent"
      } hover:bg-mainColor`}
    >
      {category}
    </button>
  );
}

export default CategoryBtnComponent;
