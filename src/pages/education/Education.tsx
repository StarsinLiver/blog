import React, { useEffect, useState } from "react";
import IEducation from "../../types/IEducation";
import EducationService from "../../services/EducationService";
import Header from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  const { eid } = useParams();
  useEffect(() => {
    if (eid) getEducation(eid);
  }, []);
  let initialEducation: IEducation = {
    eid: null,
    time: "",
    title: "",
    shortTitle: "",
    location: "",
    description: "",
  };

  let [education, setEducation] = useState<IEducation>(initialEducation);
  let [message, setMessage] = useState<string>("");

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setEducation({ ...education, [name]: value });
    // console.log(education);
  };

  const getEducation = (eid: any) => {
    EducationService.get(eid)
      .then((response: any) => {
        setEducation(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  const update = () => {
    let data = {
      eid: education.eid,
      time: education.time,
      title: education.title,
      shortTitle: education.shortTitle,
      location: education.location,
      description: education.description,
    };

    EducationService.update(data.eid, data)
      .then((response: any) => {
        navigate("/admin");
      })
      .catch((e: Error) => {
        alert("에러가 발생하였습니다.");
      });
  };

  const remove = () => {
    EducationService.remove(education.eid)
      .then((response: any) => {
        navigate("/admin");
      })
      .catch((e: Error) => {
        alert("에러가 발생하였습니다.");
      });
  };
  return (
    <>
      <Header name="이곳은 학력 수정 페이지입니다." />
      <div className="container mt-5" style={{ width: "500px" }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            학력 기간
          </label>
          <input
            type="email"
            onChange={onChangeInput}
            value={education.time}
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
            value={education.title}
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
            value={education.shortTitle}
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
            value={education.location}
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
            value={education.description}
            onChange={onChangeInput}
            id="exampleFormControlTextarea1"
            name="description"
            rows={3}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success me-3" onClick={update}>
          수정하기
        </button>

        <button type="button" className="btn btn-success me-3" onClick={remove}>
          삭제하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default Education;
