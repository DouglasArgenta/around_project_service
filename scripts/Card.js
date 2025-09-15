import { openPopup } from "./utils.js";
export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place-card")
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle("button_type_like-active");
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _handleImageClick() {
    const imagePopup = document.querySelector(".popup_type_image");
    const imagePopupImage = imagePopup.querySelector(".popup__image");
    const imagePopupTitle = imagePopup.querySelector(".popup__title_image");

    imagePopupImage.src = this._link;
    imagePopupImage.alt = this._name;
    imagePopupTitle.textContent = this._name;
    openPopup(imagePopup);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) =>
      this._handleLikeClick(evt)
    );
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick()
    );
    this._cardImage.addEventListener("click", () => this._handleImageClick());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".place-card__image");
    this._cardTitle = this._element.querySelector(".place-card__title");
    this._likeButton = this._element.querySelector(".button_type_like");
    this._deleteButton = this._element.querySelector(".button_type_delete");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
