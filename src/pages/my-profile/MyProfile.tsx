import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import IMyProfile from "../../types/IMyProfile";
import MyProfileService from "../../services/MyProfileService";

function MyProfile() {
  const navigate = useNavigate();
  useEffect(() => {get()}, []);

  let intialMyProfile: IMyProfile = {
    mid: 1,
    phrase: "",
    phraseAuthor: "",
    title: "",
    smallTitle: "",
    description: "",
    email: "",
    phone: "",
    location: "",
    blog: "",
    blogLink: "",
  };

  let [myProfile, setMyProfile] = useState<IMyProfile>(intialMyProfile);

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setMyProfile({ ...myProfile, [name]: value });
    // console.log(myProfile);
  };

  const get = () => {
    MyProfileService.get(1)
      .then((response: any) => {
        setMyProfile(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  const update = () => {
    let data = {
      mid: myProfile.mid,
      phrase: myProfile.phrase,
      phraseAuthor: myProfile.phraseAuthor,
      title: myProfile.title,
      smallTitle: myProfile.smallTitle,
      description: myProfile.description,
      email: myProfile.email,
      phone: myProfile.phone,
      location: myProfile.location,
      blog: myProfile.blog,
      blogLink: myProfile.blogLink,
    };

    MyProfileService.update(1, data)
      .then((response: any) => navigate("/admin"))
      .catch((e: Error) => console.log(e));
  };
  return (
    <>
      <Header name="이곳은 학력 수정 페이지입니다." />
      <div className="container mt-5" style={{ width: "500px" }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            명언
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.phrase}
            className="form-control"
            id="exampleFormControlInput1"
            name="phrase"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            명언 저자
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.phraseAuthor}
            className="form-control"
            id="exampleFormControlInput1"
            name="phraseAuthor"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            제목
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.title}
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
            type="text"
            className="form-control"
            onChange={onChangeInput}
            value={myProfile.smallTitle}
            id="exampleFormControlInput1"
            name="smallTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            본문
          </label>
          <textarea
            className="form-control"
            onChange={onChangeInput}
            value={myProfile.description}
            id="exampleFormControlTextarea1"
            name="description"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            이메일
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.email}
            className="form-control"
            id="exampleFormControlInput1"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            전화번호
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.phone}
            className="form-control"
            id="exampleFormControlInput1"
            name="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            거주지
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.location}
            className="form-control"
            id="exampleFormControlInput1"
            name="location"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            블로그
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.blog}
            className="form-control"
            id="exampleFormControlInput1"
            name="blog"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            블로그 링크
          </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={myProfile.blogLink}
            className="form-control"
            id="exampleFormControlInput1"
            name="blogLink"
          />
        </div>
        <button type="button" className="btn btn-success me-3" onClick={update}>
          수정하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default MyProfile;
