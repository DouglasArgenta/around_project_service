import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationConfig,
  profileEditButton,
  profileAddButton,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  cardContainerSelector,
  cardTemplateSelector,
  profileFormElement,
  newCardFormElement,
  profileNameSelector,
  profileDescriptionSelector,
} from "../utils/constants.js";

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const profileForm = new PopupWithForm(profilePopupSelector, (data) => {
  console.log(data);
  userInfo.setUserInfo({
    name: data["name-input"],
    description: data["about-input"],
  });
  profileForm.close();
});
profileForm.setEventListeners();

const cardForm = new PopupWithForm(cardPopupSelector, (data) => {
  const newCard = new Card(
    { name: data["title-input"], link: data["link-input"] },
    cardTemplateSelector,
    (name, link) => {
      imagePopup.open(name, link);
    }
  );
  const newCardElement = newCard.generateCard();
  cardList.addItem(newCardElement);
  cardForm.close();
});
cardForm.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  descriptionSelector: profileDescriptionSelector,
});

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, cardTemplateSelector, (name, link) => {
        imagePopup.open(name, link);
      });
      const cardElement = card.generateCard();
      return cardElement;
    },
  },
  cardContainerSelector
);

cardList.renderItems();

const profileFormValidator = new FormValidator(
  validationConfig,
  profileFormElement
);
const newCardFormValidator = new FormValidator(
  validationConfig,
  newCardFormElement
);
profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

profileEditButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  document.querySelector(".popup__input_type_name").value = user.name;
  document.querySelector(".popup__input_type_description").value =
    user.description;
  profileFormValidator.resetValidation();
  profileForm.open();
});

profileAddButton.addEventListener("click", () => {
  cardForm.open();
});
