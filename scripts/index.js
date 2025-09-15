import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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

const profileAddButton = document.querySelector(".profile__add-button");
const cardAddPopup = document.querySelector(".popup_type_add-card");
const cardAddCloseButton = cardAddPopup.querySelector(".button_type_close");
const cardAddForm = cardAddPopup.querySelector(".popup__form");
const titleInput = cardAddPopup.querySelector(".popup__input_type_title");
const linkInput = cardAddPopup.querySelector(".popup__input_type_link");

const imagePopup = document.querySelector(".popup_type_image");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupTitle = imagePopup.querySelector(".popup__title_image");
const imagePopupCloseButton = imagePopup.querySelector(".button_type_close");

const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData) {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.generateCard();
  return cardElement;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(profileEditPopup);
}

function handleCardAddFormSubmit(event) {
  event.preventDefault();

  const newCardData = {
    name: titleInput.value,
    link: linkInput.value,
  };

  const newCard = createCard(newCardData);
  cardContainer.prepend(newCard);

  cardAddForm.reset();
  closePopup(cardAddPopup);
}

function closePopupOnOverlayClick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

initialCards.forEach((cardData) => {
  const newCard = createCard(cardData);
  cardContainer.append(newCard);
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});

profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditPopup)
);
profileEditForm.addEventListener("submit", handleProfileFormSubmit);
profileEditPopup.addEventListener("click", closePopupOnOverlayClick);

profileAddButton.addEventListener("click", () => openPopup(cardAddPopup));
cardAddCloseButton.addEventListener("click", () => closePopup(cardAddPopup));
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);
cardAddPopup.addEventListener("click", closePopupOnOverlayClick);

imagePopupCloseButton.addEventListener("click", () => closePopup(imagePopup));
imagePopup.addEventListener("click", closePopupOnOverlayClick);

const profileFormValidator = new FormValidator(
  validationConfig,
  profileEditForm
);
const newCardFormValidator = new FormValidator(validationConfig, cardAddForm);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
