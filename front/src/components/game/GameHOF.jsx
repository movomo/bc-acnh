import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import "moment/locale/ko";
import "../../css/GameHof.css";
import BackButton from "../common/BackButton";
import { useStyles } from "../../utils/useStyles";
import * as Api from "../../api";
import { Typography } from "@mui/material";
import styled from "../../css/match.module.css";
import HomeButton from "../common/HomeButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const DIVIDER_HEIGHT = 5;

const GameHOF = () => {
  const classes = useStyles();
  const [rank, setRank] = useState([]);
  const [comment, setComment] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const outerDivRef = useRef();

  const typoStyles = {
    fontFamily: "TmoneyRoundWindExtraBold",
    fontSize: "1.5rem",
  };

  const getData = async () => {
    try {
      const { data } = await Api.get("scorelist");
      setRank(data.rankList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const goToPosition = (e) => {
    e.preventDefault();

    const PAGE_HEIGHT = window.innerHeight;

    if (e.target.innerText === "한마디 남기기") {
      outerDivRef.current.scrollTo({
        top: PAGE_HEIGHT + DIVIDER_HEIGHT,
        left: 0,
        behavior: "smooth",
      });
    } else {
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styled.outer}`} ref={outerDivRef}>
      <div className={classes.navBar}>
        <BackButton
          content="메인으로"
          className={classes.leftArrow}
          destination="explore"
        />
      </div>
      <div className={styled.inner}>
        <div className="rankWrap">
          <div className="imageWrap">
            <img src="images/trophy_rm.png" alt="trophy" />
            <div className={`hofTitle txt-shine`}>명예의 전당</div>
          </div>
          {rank.map((item, idx) => {
            return (
              <div className="rankList" key={idx}>
                <Typography sx={typoStyles} variant="body1" textAlign="center">
                  {idx + 1}등
                </Typography>
                <Typography sx={typoStyles} variant="body1" textAlign="center">
                  {item.nickname}
                </Typography>
                <Typography sx={typoStyles} variant="body1" textAlign="center">
                  {item.score}점
                </Typography>
              </div>
            );
          })}
        </div>
        <button className="goToCommentBtn" onClick={goToPosition}>
          한마디 남기기
        </button>
      </div>
      <div className={styled.inner}>
        <form className={styled.commentForm}>
          <div className={styled.commentBack}>
            <input type="text" placeholder="댓글을 입력해주세요" required />
          </div>
          <button type="submit" className={styled.commentReg}>
            등록
          </button>
        </form>
        {comment.length > 0 ? (
          <div className={styled.commentArea}>
            {comment.map((item) => (
              <div
                className={styled.commentWrapper}
                key={comment.indexOf(item)}
              >
                <span className={styled.writer}>{item.nickname}</span>
                <span
                  className={styled.commentDate}
                  style={{ fontFamily: "TmoneyRoundWindRegular" }}
                >
                  {moment(moment.utc(item.createdAt).toDate()).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )}
                </span>
                <div
                  className={styled.commentContent}
                  style={{ fontFamily: "TmoneyRoundWindRegular" }}
                >
                  {item.comment}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styled.commentArea} style={{ textAlign: "center" }}>
            <span className={styled.writer}>아직 남겨진 댓글이 없어요 :(</span>
          </div>
        )}
        <HomeButton
          Icon={ArrowUpwardIcon}
          className={classes.topBtn}
          onClick={goToPosition}
        />
      </div>
    </div>
  );
};

export default GameHOF;
