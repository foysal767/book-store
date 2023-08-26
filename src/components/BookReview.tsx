// import { ChangeEvent, FormEvent, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Textarea } from "./ui/textarea";
// import { FiSend } from "react-icons/fi";
// import {
//   useGetCommentQuery,
//   usePostCommentMutation,
// } from "@/redux/features/products/productsApi";
import { FiSend } from "react-icons/fi";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useBookCommentMutation,
  useGetCommentQuery,
} from "../redux/features/books/booksApi";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [inputValue, setInputValue] = useState<string>("");

  const [postComment, { isLoading, isError }] = useBookCommentMutation();
  console.log(isLoading, isError);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { comment: inputValue },
    };
    postComment(options);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="w-10/12 mx-auto mt-5">
      <h1 className="text-xl font-normal my-8 text-orange-500">
        Drop your feedback here
      </h1>
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[80px] w-1/3 border-2 border-black rounded-xl"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
