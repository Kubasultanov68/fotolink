import React from 'react';
import {CiBookmark, CiHeart} from "react-icons/ci";
import {Avatar, IconButton} from "@mui/material";
import Comment from "../Comment/Comment";
import {FaCommentDots, FaRegBookmark, FaRegComment, FaRegHeart} from "react-icons/fa";
import PostAddComment from "./PostAddComment/PostAddComment";
import {MdArrowBack} from "react-icons/md";
import {generateFakeData} from "../UserProfile/UserProfile";

const PostAuthor = ({post, user}) => {
    return (
        <div className='post__author'>
            <Avatar sx={{
                width: '60px',
                height: '60px'
            }} src={!user ? '' : user?.avatar}/>
            <div className="post__author-info">
                <div className="post__author-column">
                    <h5 className="post__author-name">
                        {user ? user.userName : 'Denis_Armed'}
                    </h5>
                    <p className="post__author-city">
                        MOSCOW
                    </p>
                </div>
                <p className="post__author-time">
                    Сегодня в {post ? post.updatedAt : '6:30'}
                </p>
            </div>
        </div>
    )
}

const PostBtn = ({Icon, num, open, setOpen}) => {
  return setOpen ?  (
      <button className={`post__btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          <Icon/>
          {num}
      </button>
  ) : (
      <button className='post__btn'>
          <Icon/>
          {num}
      </button>
  )
};

const Post = ({modal, post}) => {

    const [isCommentOpen, setIsCommentOpen] =  React.useState(false)

    console.log(post)

    return (
        <div className='post'>
            {modal && (
                <div className='postmodal__top'>
                    <button className='form__questions-link'>
                        <MdArrowBack className='form__questions-link_logo'/>
                        Назад

                    </button>
                    <p className="postmodal__title">{modal}</p>
                </div>
            )}
            <div className='post__top'>
                <PostAuthor post={!post ? false : post} user={!post ? false : post.user}/>
                <div>
                    <IconButton className="post__saved">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="#ABA8AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                </div>
            </div>
            <div className='post__content'>
                {!post ? generateFakeData(4).map((_, index) => (
                    <img key={index}
                         src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                         alt=""/>
                )) : post.images.map((item, index) => (
                    <img key={index} src={item} alt={`img-${index}`} />
                ))}
            </div>
            <div className="post__tags">
                {
                    !post ? (
                            <>
                                <button className="post__tags-item">
                                    #cвадьба
                                </button>
                                <button className="post__tags-item">
                                    #cвадьба
                                </button>
                                <button className="post__tags-item">
                                    #cвадьба
                                </button>
                                <button className="post__tags-item">
                                    #cвадьба
                                </button>
                                <button className="post__tags-item">
                                    #cвадьба
                                </button>
                            </>
                    ) :
                        post.tags.map((item, index) => (
                    <button className="post__tags-item" key={index}>
                {item}
                    </button>
                    ))
                }
            </div>
            <p className="post__text">
                {
                    !post ? (
                        <>
                            Обожаю первые серии со свадеб! Они всегда такие долгожданные и разные! Сегодня хочу поделиться фотографиями со свадьбы Тани и Юры
                            <br/>
                            <br/>
                            Как жалко, что в посте можно выложить только 10 штук, еле еле вместила, потому что серия далеко не на один пост. Все фотографии клевые и яркие!
                        </>
                    ) : (
                        <>
                            {post.desc}
                        </>
                    )
                }

            </p>
            <div className="post__bottom">
                <div className="post__btns">
                    <PostBtn Icon={FaRegHeart} num={!post ? 12 : post.likes.length}/>
                    <PostBtn Icon={isCommentOpen ? FaCommentDots : FaRegComment} num={12} open={isCommentOpen} setOpen={setIsCommentOpen}/>
                    <PostBtn Icon={FaRegBookmark} num={!post ? 12 : post.bookmarks.length}/>
                </div>
                <p className="post__spec">
                    <span>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer 85">
        <path id="Vector" d="M7.99999 2.73341C7.3539 2.73341 6.72233 2.925 6.18513 3.28395C5.64793 3.64289 5.22923 4.15308 4.98198 4.74998C4.73474 5.34689 4.67005 6.00371 4.79609 6.63738C4.92214 7.27105 5.23326 7.85311 5.69011 8.30996C6.14696 8.76682 6.72902 9.07793 7.36269 9.20398C7.99637 9.33002 8.65318 9.26533 9.25009 9.01809C9.84699 8.77084 10.3572 8.35214 10.7161 7.81494C11.0751 7.27774 11.2667 6.64617 11.2667 6.00008C11.2667 5.13371 10.9225 4.30282 10.3099 3.6902C9.69725 3.07758 8.86636 2.73341 7.99999 2.73341ZM7.99999 8.06675C7.59124 8.06675 7.19167 7.94554 6.85181 7.71845C6.51195 7.49136 6.24706 7.16859 6.09064 6.79096C5.93422 6.41333 5.89329 5.99779 5.97303 5.59689C6.05278 5.196 6.24961 4.82776 6.53864 4.53873C6.82766 4.2497 7.19591 4.05287 7.5968 3.97312C7.9977 3.89338 8.41323 3.93431 8.79087 4.09073C9.1685 4.24715 9.49127 4.51204 9.71836 4.8519C9.94545 5.19176 10.0667 5.59133 10.0667 6.00008C10.0667 6.5482 9.84892 7.07386 9.46134 7.46144C9.07377 7.84901 8.5481 8.06675 7.99999 8.06675ZM15.1267 5.14675C14.8655 4.60915 14.5238 4.11456 14.1133 3.68008C13.3404 2.85882 12.4399 2.1677 11.4467 1.63341C10.3944 1.03347 9.21076 0.701504 7.99999 0.666748C6.15824 0.763178 4.40017 1.4664 2.99999 2.66675C2.38627 3.1499 1.83732 3.71006 1.36666 4.33341C1.17684 4.59537 1.01169 4.87434 0.873323 5.16675C0.747414 5.4272 0.677036 5.71098 0.666656 6.00008C0.674246 6.29596 0.744694 6.58685 0.873323 6.85341C1.13451 7.39102 1.47622 7.8856 1.88666 8.32008C2.65963 9.14135 3.5601 9.83246 4.55332 10.3667C5.60558 10.9667 6.78922 11.2987 7.99999 11.3334C9.84174 11.237 11.5998 10.5338 13 9.33342C13.6242 8.85864 14.1844 8.30516 14.6667 7.68675C14.8565 7.42479 15.0216 7.14583 15.16 6.85341C15.2771 6.58432 15.3362 6.29355 15.3333 6.00008C15.3257 5.7042 15.2553 5.41332 15.1267 5.14675ZM13.9067 6.31342C13.7024 6.71861 13.4396 7.0915 13.1267 7.42008C12.4651 8.12797 11.6956 8.72651 10.8467 9.19342C9.97834 9.69184 9.0007 9.96888 7.99999 10.0001C6.46432 9.90732 5.0011 9.31501 3.83332 8.31342C3.31304 7.90301 2.84707 7.42809 2.44666 6.90008C2.3104 6.71627 2.19208 6.51981 2.09332 6.31342C2.04578 6.21459 2.01428 6.10882 1.99999 6.00008C2.01428 5.89135 2.04578 5.78558 2.09332 5.68675C2.29757 5.28156 2.56039 4.90866 2.87332 4.58008C3.53483 3.87219 4.30438 3.27365 5.15332 2.80675C6.02163 2.30832 6.99928 2.03128 7.99999 2.00008C9.53566 2.09284 10.9989 2.68516 12.1667 3.68675C12.6869 4.09715 13.1529 4.57207 13.5533 5.10008C13.6896 5.2839 13.8079 5.48035 13.9067 5.68675C13.9542 5.78558 13.9857 5.89135 14 6.00008C13.9857 6.10882 13.9542 6.21459 13.9067 6.31342Z" fill="#ABA8AD"/>
    </g>
</svg>

                    </span>
                    68
                </p>
            </div>
            <hr className="post__hr"/>
            <div className={`post__comments ${isCommentOpen ? 'open' : ''}`}>
                <Comment/>
                <Comment/>
                <Comment/>
                <p style={{marginLeft: '60px', cursor: 'pointer'}} className="comment__btn">
                    Показать еще комментарии
                </p>
            </div>
            <PostAddComment/>
        </div>
    );
};

export default Post;