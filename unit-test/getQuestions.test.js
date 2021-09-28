import services from "@/services";
import CoachingService from "@/services/CoachingService";

jest.mock("@/services", () => ({
  ...jest.requireActual("@/services"),
  getState: jest.fn(),
  getGetter: jest.fn(),
}));

describe("CoachingService/getQuestions", () => {
  it("single category query should work properly", () => {
    const API = {
      get: jest.fn(),
    };
    const cs = new CoachingService(API, API);
    cs.getQuestions({
      cursor: 0,
      size: 5,
      category: [{ groupName: "LOL_LANE", values: ["ALL"] }],
    });
    expect(API.get).toHaveBeenCalledWith("v1/qna/LOL/questions", {
      cursor: 0,
      size: 5,
      q: 'category%20eq%20%5B%7B%22groupName%22%3A%22LOL_LANE%22%2C%22values%22%3A%5B%22ALL%22%5D%7D%5D',
    });
  });
  it("multiple category query should work properly", () => {
    const API = {
      get: jest.fn(),
    };
    const cs = new CoachingService(API, API);
    cs.getQuestions({
      cursor: 0,
      size: 5,
      category: [{ groupName: "LOL_LANE", values: ["ALL"] }, { groupName: 'LOL_CHAMP', values: ['Garen']}],
    });
    expect(API.get).toHaveBeenCalledWith("v1/qna/LOL/questions", {
      cursor: 0,
      size: 5,
      q: 'category%20eq%20%5B%7B%22groupName%22%3A%22LOL_LANE%22%2C%22values%22%3A%5B%22ALL%22%5D%7D%2C%7B%22groupName%22%3A%22LOL_CHAMP%22%2C%22values%22%3A%5B%22Garen%22%5D%7D%5D',
    });
  });
});
