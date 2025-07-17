const profileEditButton = document.querySelector(".button_type_edit");
const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const profileEditCloseButton =
  profileEditPopup.querySelector(".button_type_close");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const profileEditForm = profileEditPopup.querySelector(".popup__form");
const nameInput = profileEditPopup.querySelector(".popup__input_type_name");
const descriptionInput = profileEditPopup.querySelector(
  ".popup__input_type_description"
);

const likeButtons = document.querySelectorAll(".button_type_like");

const emptyHeartSrc = "./images/like-button.png";
const filledHeartSrc = "./images/like-button-active.png";

function openPopup() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  profileEditPopup.classList.add("popup_opened");
}

function closePopup() {
  profileEditPopup.classList.remove("popup_opened");
}

function toggleLike(event) {
  const likeButton = event.currentTarget;
  const heartIcon = likeButton.querySelector(".button__icon");

  if (heartIcon.src.includes(emptyHeartSrc.split("/").pop())) {
    heartIcon.src = filledHeartSrc;
    heartIcon.alt = "Curtido";
  } else {
    heartIcon.src = emptyHeartSrc;
    heartIcon.alt = "Curtir";
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  const newName = nameInput.value;
  const newDescription = descriptionInput.value;

  profileName.textContent = newName;
  profileDescription.textContent = newDescription;

  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
profileEditCloseButton.addEventListener("click", closePopup);

likeButtons.forEach((button) => {
  button.addEventListener("click", toggleLike);
});

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
