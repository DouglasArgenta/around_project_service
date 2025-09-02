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

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".place-card").cloneNode(true);
  const cardImage = cardElement.querySelector(".place-card__image");
  const cardTitle = cardElement.querySelector(".place-card__title");
  const likeButton = cardElement.querySelector(".button_type_like");
  const deleteButton = cardElement.querySelector(".button_type_delete");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("button_type_like-active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    imagePopupImage.src = cardData.link;
    imagePopupImage.alt = cardData.name;
    imagePopupTitle.textContent = cardData.name;
    openPopup(imagePopup);
  });

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

profileAddButton.addEventListener("click", () => openPopup(cardAddPopup));
cardAddCloseButton.addEventListener("click", () => closePopup(cardAddPopup));
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);

imagePopupCloseButton.addEventListener("click", () => closePopup(imagePopup));
