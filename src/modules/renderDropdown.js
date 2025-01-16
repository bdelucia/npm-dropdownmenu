function makeDropdownMenu() {
  const dropdownMenu = document.createElement('select');

  const editOption = document.createElement('option');
  const copyOption = document.createElement('option');
  const deleteOption = document.createElement('option');
  editOption.textContent = 'Edit';
  copyOption.textContent = 'Copy';
  deleteOption.textContent = 'Delete';

  dropdownMenu.append(editOption, copyOption, deleteOption);
  dropdownMenu.style.display = 'none';

  return dropdownMenu;
}

export function renderDropdown() {
  const dropdownButton = document.getElementById('dropdown-button');
  const container = document.getElementById('container');
  const dropdownSelect = makeDropdownMenu();
  container.appendChild(dropdownSelect);

  dropdownButton.addEventListener('click', () => {
    if (dropdownSelect.style.display === 'none') {
      dropdownSelect.style.display = 'block';
    } else {
      dropdownSelect.style.display = 'none';
    }
  });
}
