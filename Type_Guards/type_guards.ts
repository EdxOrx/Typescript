type ApiSuccess = {
  status: "success";
  data: {
    name: string;
    age: number;
  };
};

type ApiError = {
  status: "error";
  message: string;
};

type ApiResponse = ApiSuccess | ApiError;

function isSuccess(response: ApiResponse): response is ApiSuccess {
  return response.status === "success";
}

function handleResponse(response: ApiResponse) {
  if (isSuccess(response)) {
    console.log(`Name: ${response.data.name}`);
    console.log(`Age: ${response.data.age}`);
  } else {
    console.error(`${response.message}`);
  }
}

const response1: ApiResponse = {
  status: "success",
  data: {
    name: "Luis",
    age: 30,
  },
};

const response2: ApiResponse = {
  status: "error",
  message: "Ooops something went wrong",
};

console.log("Start response 1...");
handleResponse(response1);
console.log("Start response 2...");
handleResponse(response2);

// Run: npx ts-node Generics/generics.ts
