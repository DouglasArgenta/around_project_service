export const initialCards = [
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

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const profileEditButton = document.querySelector(".button_type_edit");
export const profileAddButton = document.querySelector(".profile__add-button");

export const profilePopupSelector = ".popup_type_edit-profile";
export const cardPopupSelector = ".popup_type_add-card";
export const imagePopupSelector = ".popup_type_image";

export const cardContainerSelector = ".places__list";
export const cardTemplateSelector = "#card-template";
export const profileFormElement = document.querySelector(
  ".popup__form[name='edit-profile']"
);
export const newCardFormElement = document.querySelector(
  ".popup__form[name='add-card']"
);

export const profileNameSelector = ".profile__name";
export const profileDescriptionSelector = ".profile__description";
