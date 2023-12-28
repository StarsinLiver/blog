import React, { useState } from "react";
import Header from "../../components/Header";
import IEducation from "../../types/IEducation";
import EducationService from "../../services/EducationService";
import { Link, useNavigate } from "react-router-dom";

function AddEducation() {

  const navigate = useNavigate();
  let initialEducation: IEducation = {
    eid: null,
    time: "",
    title: "",
    shortTitle: "",
    location: "",
    description: "",
  };

  let [education, setEducation] = useState<IEducation>(initialEducation);
  let [message , setMessage] = useState<string>("");

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setEducation({ ...education, [name]: value });
    // console.log(education);
  };

  const save = () => {
    let data = {
      time: education.time,
      title: education.title,
      shortTitle: education.shortTitle,
      location: education.location,
      description: education.description,
    };

    EducationService.create(data)
      .then((response: any) => {
        navigate("/admin");
      })
      .catch((e: Error) => {
        alert("에러가 발생하였습니다.");
      });
  };

  return (
    <>
      <Header name="이곳은 학력 추가 공간입니다." />
      <div className="container mt-5" style={{ width: "500px" }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            학력 기간
          </label>
          <input
            type="email"
            onChange={onChangeInput}
            className="form-control"
            id="exampleFormControlInput1"
            name="time"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            큰 제목
          </label>
          <input
            type="email"
            onChange={onChangeInput}
            className="form-control"
            id="exampleFormControlInput1"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            작은 제목
          </label>
          <input
            type="email"
            onChange={onChangeInput}
            className="form-control"
            id="exampleFormControlInput1"
            name="shortTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            위치
          </label>
          <input
            type="email"
            onChange={onChangeInput}
            className="form-control"
            id="exampleFormControlInput1"
            name="location"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            설명
          </label>
          <textarea
            className="form-control"
            onChange={onChangeInput}
            id="exampleFormControlTextarea1"
            name="description"
            rows={3}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success me-3" onClick={save}>
          추가하기
        </button>
        <Link to={'/admin'} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default AddEducation;
