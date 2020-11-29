(() => {
  const addActionToCards = () => {
    const todoCards = document.querySelectorAll('.todo-card');
    if (todoCards) {
      todoCards.forEach((todoCard) => {
        todoCard.addEventListener('click', () => {
          todoCard.classList.toggle('todo-card-active');
        });
      });
    }
  };

  const addActionToDeleteButton = () => {
    const deleteButton = document.querySelector('.button-delete');
    if (deleteButton) {
      console.log('delete button');
      deleteButton.addEventListener('click', () => {
        confirm('delete selected items?');
      });
    }
  };

  const addActionToDoneButton = () => {
    const doneButton = document.querySelector('.button-success');
    if (doneButton) {
      doneButton.addEventListener('click', () => {
        confirm('selected items are done?');
      });
    }
  };

  addActionToCards();
  addActionToDeleteButton();
  addActionToDoneButton();
})();
