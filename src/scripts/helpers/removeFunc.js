export const removeFunc = ({ target }, removeItems, selector) => {
  let confirmQuestion = confirm("You want remove this item");
  confirmQuestion &&
    (removeItems = removeItems.filter(({ id }) => {
      target.closest(`${selector}`).remove();
      return id != target.dataset.id;
    }));
};
