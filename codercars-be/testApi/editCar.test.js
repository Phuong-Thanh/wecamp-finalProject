import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
import { data } from "./editData";
import Car from "../models/Car";

beforeAll((done) => {
  done();
});

beforeEach(() => {
  return request(app).post("/car").send(data.toEditCar[21]);
});

afterEach(() => {
  return Car.deleteMany({ make: "testing put api" });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe("Get all cars", () => {
  test("Successfully edit data with valid input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[0]);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("Update Car Successfully!");
    expect(res.body.car).toMatchObject(data.toEditCar[0]);
  });
  test("Unable to edit data with empty make input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[1]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Verify 200 status code when edit date with special character make input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[2]);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("Update Car Successfully!");
  });
  test("Unable to edit data with empty model input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[3]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Verify 200 status code when edit data with special character model input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[4]);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("Update Car Successfully!");
  });
  test("Unable to edit data with empty transmission type input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[5]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });

  test("Unable to edit data with invalid transmission type input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[6]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with empty size input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[7]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });

  test("Unable to edit data with invalid size input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[8]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with empty style input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[9]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });

  test("Verify 200 status code when edit data with special character style input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[10]);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("Update Car Successfully!");
  });

  test("Unable to edit data with empty release_date input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[11]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with past release_date input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[12]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with future release_date input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[13]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with string release_date input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[14]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Cast to Number failed");
  });
  test("Unable to edit data with non-integer release_date input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[15]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with empty price input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[16]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with min price input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[17]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with max price input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[18]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with non-integer price input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[19]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Validation failed");
  });
  test("Unable to edit data with string price input", async () => {
    const idTest = (await Car.findOne({ make: "testing put api" }))._id;
    console.log(idTest);
    const res = await request(app)
      .put(`/car/${idTest}`)
      .send(data.toEditCar[20]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Cast to Number failed");
  });
});
