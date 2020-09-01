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
type dogBreedsType = { [key: string]: string };
class DogService {
  public dogBreeds: dogBreedsType;
  public model: MobileNet | null = null;
  constructor() {
    this.dogBreeds = {};
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
      console.error("could not get breed pictures");
    }
  }
  public async getAllBreeds() {
    // read our JSON
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    let data: DogsAPI = await response.json();
    //ts doesn't support yet Maps  new Map() so I used simple object
    let dogBreeds: dogBreedsType = {};
    if (data.status === "success") {
      Object.keys(data.message).forEach(dogName => {
        dogBreeds[dogName.toLowerCase()] = dogName;
        data.message[dogName].forEach(dogPrefix => {
          dogBreeds[dogName.toLowerCase() + "-" + dogPrefix.toLowerCase()] =
            dogName + dogPrefix;
        });
      });
      this.dogBreeds = dogBreeds;
    }
  }
  public async loadModel() {
    // TODO this model should be in another service, but i took a shortcut to scope the asssignment on time
    this.model = await mobilenet.load();
  }
  public async classifyDog({ url }: { url: string }) {
    const image = document.createElement("img");
    image.src = url;
    if (image && this.model) {
      const predictions: Classification[] = await this.model.classify(image);
      if (predictions) {
        // Could be improved with regex or binary search
        for (let predicted of predictions) {
          const predictedDog = predicted.className.toLowerCase();
          const detectedBreed =
            this.dogBreeds[predictedDog.replace(" ", "-")] ||
            this.dogBreeds[predictedDog.replace(" ", "")] ||
            this.dogBreeds[predictedDog.replace("-", "")];
          if (detectedBreed) {
            return { message: "", detectedBreed };
          }
        }
        console.error("couldn't find the dog in our db");
        return {
          message: "Couldn't find the dog in our db",
          detectedBreed: ""
        };
      } else {
        console.error("couldn't make predictions");
        return {
          message: "Problems with predictions, try again later",
          detectedBreed: ""
        };
      }
    }
  }
}
export const dogService = new DogService();
