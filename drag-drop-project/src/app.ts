// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable): boolean {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().length !== 0;
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length > validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length < validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value > validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }

  return isValid;
}

// Project Input Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.templateElement = document.querySelector(
      "#project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInput = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.attach();
    this.configure();
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInput.value;
    const description = this.descriptionInput.value;
    const people = this.peopleInput.value;

    const titleValidatable: Validatable = {
      value: title,
      required: true
    };

    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 4
    };

    const peopleValidatable: Validatable = {
      value: +people,
      required: true,
      min: 0,
      max: 4
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Please enter valid inputs!");
      return;
    } else {
      return [title, description, +people];
    }
  }

  private clearInputs(): void {
    this.titleInput.value = "";
    this.descriptionInput.value = "";
    this.peopleInput.value = "";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private onFormSubmit(e: Event) {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log(title, description, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.onFormSubmit.bind(this));
  }
}

const prjInput = new ProjectInput();
