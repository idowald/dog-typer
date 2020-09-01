import * as mobilenet from "@tensorflow-models/mobilenet";
import { MobileNet } from "@tensorflow-models/mobilenet";

interface DogsAPI {
  status: string;
  message: { [key: string]: string[] };
}
interface DogsPicturesAPI {
  status: string;
  message: string[];
}
interface Classification {
  className: string;
  probability: number;
}
class DogService {
  public dogBreeds: string[];
  public model: MobileNet | null = null;
  constructor() {
    this.dogBreeds = [];
    this.getAllBreeds = this.getAllBreeds.bind(this);
    this.classifyDog = this.classifyDog.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.getBreedPictures = this.getBreedPictures.bind(this);
  }
  public async getBreedPictures(breed: string) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    let data: DogsPicturesAPI = await response.json();
    if (data.status === "success") {
      return data.message;
    } else {
      console.error("TODO error handling getBreedPictures");
    }
  }
  public async getAllBreeds() {
    // read our JSON
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    let data: DogsAPI = await response.json();
    let dogBreeds: string[] = [];
    if (data.status === "success") {
      Object.keys(data.message).forEach(dogName => {
        dogBreeds.push(dogName);
        data.message[dogName].forEach(dogPrefix => {
          dogBreeds.push(dogName + "-" + dogPrefix);
        });
      });
      this.dogBreeds = dogBreeds;
      return dogBreeds;
    } else {
      console.error("Todo errors handling");
      return [];
    }
  }
  public async loadModel() {
    // TODO this model should be in another service, but i took a shortcut to scope the asssignment on time
    this.model = await mobilenet.load();
  }
  public async classifyDog({ url }: { url: string }) {
    // Load the model.

    // Classify the image.
    // TODO improve instead of vanilla js to a better way with query document
    const image = document.getElementById(
      "placeHolderImageId"
    ) as HTMLImageElement | null;
    if (image && this.model) {
      // this.model = await mobilenet.load();
      const predictions: Classification[] = await this.model.classify(image);
      if (predictions) {
        // Could be improved with regex or binary search
        const detectedBreed = this.dogBreeds.find(dogBreed => {
          // a lot of many cases i've detected
          return (
            dogBreed.toLowerCase() ===
              predictions[0].className.toLowerCase().replace(" ", "-") ||
            dogBreed.toLowerCase() ===
              predictions[0].className.toLowerCase().replace(" ", "") ||
            dogBreed.toLowerCase() ===
              predictions[0].className.toLowerCase().replace("-", "")
          );
        });
        if (detectedBreed) {
          return { message: "", detectedBreed };
        } else {
          console.error("we don't have that dog in the db");
          return { message: "Could not detect this dog", detectedBreed: "" };
        }
      } else {
        console.error("couldn't make predictions");
        return {
          message: "Problems with predictions, try again later",
          detectedBreed: ""
        };
      }
    } else {
      console.error("couldn't load image");
      return {
        message: "Could not load image, are you sure it is a legit file?",
        detectedBreed: ""
      };
    }
  }
}
export const dogService = new DogService();
