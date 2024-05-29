!function(){"use strict";class e{constructor(e,t){this._inputSelector=e.inputSelector,this._formSelector=e.formSelector,this._submitButtonSelector=e.submitButtonSelector,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inactiveButtonClass=e.inactiveButtonClass,this._form=t,this._inputElements=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){return e.validity.valid?this._hideInputError(e):this._showInputError(e)}resetValidation(){this._toggleButtonState(),this._form.reset(),this._inputElements.forEach((e=>{this._hideInputError(e)}))}disableButton(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass)}_toggleButtonState(){this._hasInvalidInput()?this.disableButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_hasInvalidInput(){return!this._inputElements.every((e=>e.validity.valid))}_setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._inputElements.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._setEventListeners()}}class t{constructor(e,t,s){let{name:n,link:i}=e;this._handleImageClick=s,this._name=n,this._link=i,this._cardSelector=t}_setEventListeners(){this._cardElement.querySelector(".card__image").addEventListener("click",(()=>{this._handleImageClick({name:this._name,link:this._link})})),this._cardElement.querySelector(".card__like-button").addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__delete-button").addEventListener("click",(()=>{this._handleDeleteCard()}))}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active")}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._cardElement.querySelector(".card__image").setAttribute("src",this._link),this._cardElement.querySelector(".card__image").setAttribute("alt",this._name),this._cardElement.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._cardElement}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popupElement.querySelector(".modal__close").addEventListener("click",(()=>{this.close()})),this._popupElement.addEventListener("click",(e=>{e.target.classList.contains("modal_opened")&&this.close()}))}}class n extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement?.querySelector(".modal__form"),this._handleFormSubmit=t,this._inputElements=Array.from(this._popupForm.querySelectorAll(".modal__input")),this.setEventListeners()}_getInputValues(){const e={};return this._inputElements.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}}const i={formSelector:".modal__form",errorClass:"modal__error",inputErrorClass:"modal__input_type_error",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled"},r=document.querySelector("#profile-edit-button"),o=document.querySelector("#profile-edit-modal"),a=(document.querySelector(".profile__title"),document.querySelector("#profile__description"),document.querySelector("#profile-title-input")),l=document.querySelector("#profile-description-input"),c=document.querySelector(".profile__add-button"),u=o.querySelector(".modal__form"),d=document.querySelector("#add__card-form");new e(i,u).enableValidation();const m=new e(i,d);m.enableValidation();const _=new class extends s{constructor(e){super({popupSelector:e}),this._imageElement=this._popupElement?.querySelector(".modal__image"),this._imageTitle=this._popupElement?.querySelector(".modal__image_description"),this.setEventListeners()}open(e){this._imageElement.src=e.link,this._imageElement.alt=`Image: ${e.name}`,this._imageTitle.textContent=e.name,super.open()}}("#preview-image-modal"),p=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this.addItem(e)}))}addItem(e){const t=this._renderer(e);this._container.prepend(t)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg "}],renderer:function(e){return new t(e,"#card-template",v).getView()}},".cards__list"),h=new n("#profile-edit-modal",(function(e){S.setUserInfo({name:e.title,description:e.description}),h.close()})),E=new n("#add-card-modal",(function(e){p.addItem({name:e.title,link:e.url}),d.reset(),m.disableButton(),E.close()})),S=new class{constructor(e){let{name:t,description:s}=e;this._name=document.querySelector(t),this._description=document.querySelector(s)}getUserInfo(){return{name:this._name.textContent,description:this._description.textContent}}setUserInfo(e){this._name.textContent=e.name,this._description.textContent=e.description}}({name:".profile__title",description:"#profile__description"});function v(e){_.open(e)}r.addEventListener("click",(()=>{const{name:e,description:t}=S.getUserInfo();a.value=e.trim(),l.value=t.trim(),h.open()})),c.addEventListener("click",(()=>{E.open()})),p.renderItems()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQzVDVixFQUFpQjdDLE1BQU0sSUFHekJ1QixFQUFpQm5ELGlCQUFpQixTQUFTLEtBQ3pDOEUsRUFBYWxELE1BQU0sSUFHckJpQyxFQUFRTyxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBvcHRpb25zLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gb3B0aW9ucy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBvcHRpb25zLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IG9wdGlvbnMuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBvcHRpb25zLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IG9wdGlvbnMuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9mb3JtID0gZm9ybUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9hZGQgYSByZXNldCBWYWxpZGF0aW9uIGZ1bmN0aW9uLi4uXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuICF0aGlzLl9pbnB1dEVsZW1lbnRzLmV2ZXJ5KFxuICAgICAgKGlucHV0RWxlbWVudCkgPT4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkXG4gICAgKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rIH0sIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xuICAgIC8vIEluaXRpYWxpemF0aW9uXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICB9XG5cbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHtcbiAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICAgIGxpbms6IHRoaXMuX2xpbmssXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbigpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gQ2FyZCBBY3Rpb25zXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgLy8gQ2FyZCBSZW5kZXJpbmdcbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIilcbiAgICAgIC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5fbGluayk7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXG4gICAgICAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBvcHVwIGNsYXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50IGxpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5lZFwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudD8ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKVxuICAgICk7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpOyAvLyBDYWxsIHRoZSBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzXG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvblxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG5cbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcblxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcblxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3Zhbm9pc2UuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcblxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZyBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb3JtU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcblxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvclwiLFxuXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXG5cbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXG59O1xuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGltcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsIGZvcm1TZXR0aW5ncyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcbi8vY29uc3QgcHJvZmlsZUNsb3NlQnV0dG9uID0gcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcbmNvbnN0IHByb2ZpbGVBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4vL2NvbnN0IHByb2ZpbGVFZGl0U3VibWl0ID0gcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtc2F2ZS1idXR0b25cIik7XG4vL2NvbnN0IGNhcmRMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuLy9jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIikuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbi8vY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfX2FkZC1mb3JtXCIpO1xuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX19jYXJkLWZvcm1cIik7XG4vL2NvbnN0IHBsYWNlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZENhcmQtdGl0bGUtaW5wdXRcIik7XG4vL2NvbnN0IHBsYWNlSW5wdXRVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZENhcmQtZGVzY3JpcHRpb24taW5wdXRcIik7XG4vL2NvbnN0IGNsb3NlQnV0dG9uUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfX2Nsb3NlLW1vZGFsXCIpO1xuLy9jb25zdCBjYXJkSW1hZ2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZF9faW1hZ2VfbW9kYWxcIik7XG4vL2NvbnN0IG1vZGFsSW1hZ2VDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiI21vZGFsX19pbWFnZS1jbG9zZS1idXR0b25cIik7XG4vL2NvbnN0IG1vZGFsSW1hZ2VTcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsX19pbWFnZVwiKTtcbi8vY29uc3QgbW9kYWxJbWFnZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF9faW1hZ2VfZGVzY3JpcHRpb25cIik7XG4vL2NvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbi8vY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcbi8vY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jb250YWluZXJcIik7XG4vL2NvbnN0IGVkaXRNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIpO1xuLy9jb25zdCBhZGRNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcblxuY29uc3QgcHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRpb24oZm9ybVNldHRpbmdzLCBwcm9maWxlRWRpdEZvcm0pO1xucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuY29uc3QgYWRkQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRpb24oZm9ybVNldHRpbmdzLCBhZGRGb3JtKTtcbmFkZENhcmRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjcHJldmlldy1pbWFnZS1tb2RhbFwiKTtcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAgeyBpdGVtczogaW5pdGlhbENhcmRzLCByZW5kZXJlcjogY3JlYXRlQ2FyZCB9LFxuICBcIi5jYXJkc19fbGlzdFwiXG4pO1xuY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICBcIiNwcm9maWxlLWVkaXQtbW9kYWxcIixcbiAgaGFuZGxlRWRpdFByb2ZpbGVTdWJtaXRcbik7XG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNhZGQtY2FyZC1tb2RhbFwiLCBoYW5kbGVBZGRDYXJkU3VibWl0KTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lOiBcIi5wcm9maWxlX190aXRsZVwiLFxuICBkZXNjcmlwdGlvbjogXCIjcHJvZmlsZV9fZGVzY3JpcHRpb25cIixcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKGNhcmREYXRhKSB7XG4gIGltYWdlUG9wdXAub3BlbihjYXJkRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcbiAgc2VjdGlvbi5hZGRJdGVtKHsgbmFtZTogaW5wdXRWYWx1ZXMudGl0bGUsIGxpbms6IGlucHV0VmFsdWVzLnVybCB9KTtcbiAgYWRkRm9ybS5yZXNldCgpO1xuICBhZGRDYXJkRm9ybVZhbGlkYXRvci5kaXNhYmxlQnV0dG9uKCk7XG4gIGFkZENhcmRQb3B1cC5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0UHJvZmlsZVN1Ym1pdChpbnB1dFZhbHVlcykge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgbmFtZTogaW5wdXRWYWx1ZXMudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGlucHV0VmFsdWVzLmRlc2NyaXB0aW9uLFxuICB9KTtcbiAgZWRpdFByb2ZpbGVQb3B1cC5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGRhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgaGFuZGxlSW1hZ2VDbGljayk7XG4gIHJldHVybiBjYXJkLmdldFZpZXcoKTtcbn1cblxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgcHJvZmlsZVRpdGxlSW5wdXQudmFsdWUgPSBuYW1lLnRyaW0oKTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbi50cmltKCk7XG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xufSk7XG5cbnByb2ZpbGVBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcbn0pO1xuXG5zZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBvcHVwSW1hZ2UgQ2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XG4gICAgLy90aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudD8ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG4gICAgdGhpcy5faW1hZ2VUaXRsZSA9IHRoaXMuX3BvcHVwRWxlbWVudD8ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1vZGFsX19pbWFnZV9kZXNjcmlwdGlvblwiXG4gICAgKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBvcGVuKGRhdGEpIHtcbiAgICAvL3tuYW1lOiB5b3NpbWl0ZSwgbGluazogaHR0cHNkfVxuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IGBJbWFnZTogJHtkYXRhLm5hbWV9YDtcbiAgICB0aGlzLl9pbWFnZVRpdGxlLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZGF0YSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVXNlckluZm8gQ2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGRlc2NyaXB0aW9uIH0pIHtcbiAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50LFxuICAgIH07XG4gICAgcmV0dXJuIHVzZXJJbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8oZGF0YSkge1xuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9ybVZhbGlkYXRpb24iLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2Zvcm0iLCJfaW5wdXRFbGVtZW50cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZUVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJyZW1vdmUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInJlc2V0VmFsaWRhdGlvbiIsIl90b2dnbGVCdXR0b25TdGF0ZSIsInJlc2V0IiwiZm9yRWFjaCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJldmVyeSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImVuYWJsZVZhbGlkYXRpb24iLCJDYXJkIiwiX3JlZiIsImNhcmRTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJuYW1lIiwibGluayIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX25hbWUiLCJfbGluayIsIl9jYXJkU2VsZWN0b3IiLCJfY2FyZEVsZW1lbnQiLCJfaGFuZGxlTGlrZUljb24iLCJfaGFuZGxlRGVsZXRlQ2FyZCIsInRvZ2dsZSIsImdldFZpZXciLCJkb2N1bWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJldmVudCIsImZvcm1TZXR0aW5ncyIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZUVkaXRNb2RhbCIsInByb2ZpbGVUaXRsZUlucHV0IiwicHJvZmlsZURlc2NyaXB0aW9uSW5wdXQiLCJwcm9maWxlQWRkQnV0dG9uIiwicHJvZmlsZUVkaXRGb3JtIiwiYWRkRm9ybSIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwiaW1hZ2VQb3B1cCIsIl9pbWFnZUVsZW1lbnQiLCJfaW1hZ2VUaXRsZSIsImRhdGEiLCJzcmMiLCJhbHQiLCJzZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImVkaXRQcm9maWxlUG9wdXAiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFkZENhcmRQb3B1cCIsInVybCIsIl9kZXNjcmlwdGlvbiIsImdldFVzZXJJbmZvIiwiY2FyZERhdGEiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==