"use client";
import FormGenerator from "@/components/global/form-generator";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { useVideoComment } from "@/hooks/useVideo";
import { Send, Smile } from "lucide-react";
import React from "react";

import { useState } from "react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

type Props = {
  videoId: string;
  commentId?: string;
  author: string;
  close?: () => void;
};

const CommentForm = ({ author, videoId, close, commentId }: Props) => {
  const { errors, isPending, onFormSubmit, register } = useVideoComment(
    videoId,
    commentId
  );

  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");

  const emojiPickerTheme = Theme.DARK;

  const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent): void => {
    if (!isPending) {
      setCommentText((prev) => prev + String(emojiData.emoji));
    }else{
      setCommentText("")
    }
    setEmojiPickerOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };
  return (
    <form className="relative w-full" onSubmit={onFormSubmit}>
      <FormGenerator
        register={register}
        errors={errors}
        placeholder={`Respond to ${author}...`}
        name="comment"
        inputType="input"
        lines={8}
        type="text"
        value={String(commentText)}
        onChange={handleChange}
      />
      {isEmojiPickerOpen && (
        <div className="absolute right-10 top-10 z-50">
          <EmojiPicker onEmojiClick={onEmojiClick} theme={emojiPickerTheme} />
        </div>
      )}
      <Smile
        className="text-white/50 cursor-pointer hover:text-white/80 absolute right-10 top-2"
        size={18}
        onClick={() => setEmojiPickerOpen(!isEmojiPickerOpen)}
      />
      <Button
        className="p-0 bg-transparent absolute top-[1px] right-3 hover:bg-transparent "
        type="submit"
      >
        <Loader state={isPending}>
          <Send
            className="text-white/50 cursor-pointer hover:text-white/80"
            size={18}
          />
        </Loader>
      </Button>
    </form>
  );
};

export default CommentForm;
