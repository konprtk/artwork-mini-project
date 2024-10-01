import React, { useState } from "react";
import Comment from "./Comment";

function GalleryFirstRow() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "John Doe",
      date: "2 days ago",
      text: "This artwork is amazing! I love the colors and the composition. Keep up the good work!",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        user: "Anonymous", // You can modify this to get a username if needed
        date: "Just now",
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div>
      {/* First Row: Artwork Image on Top and Video Below */}
      <div className="flex flex-row items-start justify-center space-x-6 pt-16">
        {/* Container for the artwork image and its description */}
        <div className="flex flex-col max-w-[45%]">
          <img
            className="artwork-image h-auto rounded-[6px] border-2 border-gray-300"
            src="artwork.png"
            alt="Artwork"
          />
          {/* Description of the artwork */}
          <p className="text-center text-sm mb-2">
            80 x 60 cm, Oil and flour on canvas, 2023
          </p>
          <p className="text-center text-sm mt-2">
            This work represents personal reflection and connection with nature,
            specifically the forest. Each viewer projects their own
            psychological landscape, recalling childhood memories or recent
            encounters with nature, and the forest offers everyone a neutral
            space for reflection and self-discovery. The art captivates the
            viewer, fostering a deeper connection with nature and inviting
            personal and collective reflection.
          </p>
        </div>
        {/* Container for the video and its title/description */}
        <div className="flex flex-col max-w-[40%] mb-6 mt-4">
          <div className="mb-6">
            {/* Title of the artwork */}
            <h1 className="font-bold text-2xl text-center pb-4">
              Silence of Love
            </h1>
          </div>
          {/* Video element */}
          <video
            className="rounded-md h-auto max-w-full"
            autoPlay
            muted
            src="video.mp4"
          />

          <h1 className="pt-4">Comments</h1>

          {/* Render comments */}
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              user={comment.user}
              date={comment.date}
              text={comment.text}
            />
          ))}


          {/* Comment input form */}
          <form onSubmit={handleCommentSubmit} className="">
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
              rows="3"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white rounded-md p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GalleryFirstRow;
