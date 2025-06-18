import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const CreatePostPage = () => {
  return (
    <form className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-6 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]">
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">Create Post</h3>

        <p>Create a new post and share your ideas.</p>
      </div>

      <div>
        <Label htmlFor="title" className="dark:text-[97989F]">
          Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="Give your post a title"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[400px]"
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          placeholder="Write your blog post"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[180px]  w-[400px] text-justify"
        />
      </div>

      <div className="w-full">
        <Label htmlFor="category">Category</Label>

        <Select>
          <SelectTrigger className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="FullStack">FullStack</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="ML">ML</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="Blockchain">Blockchain</SelectItem>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Software Development">
                Software Development
              </SelectItem>
              <SelectItem value="Mobile Development">
                Mobile Development
              </SelectItem>
              <SelectItem value="Game Development">Game Development</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Label htmlFor="featured_image">Featured Image</Label>
        <Input
          type="file"
          id="picture"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full"
        />
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
          Create post
        </button>
      </div>
    </form>
  );
};

export default CreatePostPage;
