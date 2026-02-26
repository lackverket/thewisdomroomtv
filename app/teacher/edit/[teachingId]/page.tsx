"use client";

import TeacherNavigation from "@/components/TeacherNavigation";
import MainFooter from "@/app/main/[components]/MainFooter";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { useState, useRef, useEffect, use } from "react";

import { Textarea } from "@/components/ui/textarea";
import { getTeaching, updateTeaching } from "@/actions/teaching-actions";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

interface editPageProps {
  params: Promise<{
    tag: string; teachingId: string 
  }>;
}

interface particularTeachingItem {
  id: string;
  title: string;
  image: string | null;
  bannerColour: string | null;
  description: string;
  mainContent: string;
  comment: string;
  teacherId: string | null;
  teacherName: string | null;
  createdAt: Date;
  updatedAt: Date;
}



function randomHexColor(): string {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  return `#${randomNumber.toString(16).padStart(6, "0")}`;
}

const EditTeaching = ({ params }: editPageProps) => {
  const { tag, teachingId } = use(params);
  let particularTeaching: particularTeachingItem | null;

  const [imageFile, setImageFile] = useState<File | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(true);
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const router = useRouter()

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [teachingItems, setTeachingItems] = useState<particularTeachingItem | null>(null)

  const handleFileChange = (event: any) => {
    setImageFile(event?.target.files[0]);
  };

  const teachingEditHandler = async () => {
    await updateTeaching({
      id: teachingItems?.id,
      title: titleRef?.current?.value,
      description: descriptionRef?.current?.value,
      image: titleRef?.current?.value,
      mainContent: contentRef?.current?.value,
      comment: commentRef?.current?.value,
    })
    toast.success("Item has been updated", {
      description: "Your modifications have been made",
      position: "top-center"
    });
    router.push("/teacher")
  }

  const goBackHandler = () => {
    router.push("/teacher")
  }

  useEffect(() => {
    const getField = async () => {
      setLoading(true);
      particularTeaching = await getTeaching(teachingId);
      setLoading(false);

      if (!particularTeaching) {
        setError(true)
        return 
      };
      setTeachingItems(particularTeaching)

    };

    getField();
  }, []);

  console.log(`error: ${error}`);

  return (
    <main className="min-h-screen flex flex-col items-center gap-10">
      <TeacherNavigation />
      {error && !loading && (
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <p>Item does not exist</p>
        </div>
      )}
      {!error && loading && (
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <p className="flex items-center gap-2 font-bold"><span>Loading</span> <span><Spinner /></span></p>
        </div>
      ) }
      {!error && !loading &&  
      (
      <section className="relative flex-1 w-full flex flex-col items-center">
        <h1 className="w-full flex justify-center items-center font-bold text-2xl text-[#555] mb-5">
          Edit Your Teaching
        </h1>

        <div
          className={`w-[85%] sm:max-2xl:w-[80%] my-5 flex justify-center items-center`}
        >
          <div className="w-full max-w-md">
            <form>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend className="w-full text-center">
                    Make Changes
                  </FieldLegend>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Title
                      </FieldLabel>
                      <Input
                        id="checkout-7j9-card-name-43j"
                        placeholder="e.g, The Meaning of Man "
                        ref={titleRef}
                        defaultValue={teachingItems?.title}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Thumbnail
                      </FieldLabel>
                      <Input
                        id="checkout-7j9-card-number-uw1"
                        required
                        type="file"
                        onChange={handleFileChange}
                      />
                      <FieldDescription>
                        Your image will be displayed as the banner for this
                        teaching
                      </FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Description
                      </FieldLabel>
                      <Input
                        id="checkout-7j9-card-number-uw1"
                        placeholder="A brief description of This Teaching"
                        ref={descriptionRef}
                        defaultValue={teachingItems?.description}
                        required
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <FieldSeparator />
                <FieldSet>
                  <FieldGroup>
                    <Field orientation="horizontal" className="pl-1">
                      <Checkbox
                        id="checkout-7j9-same-as-shipping-wgm"
                        defaultChecked
                        checked={checked}
                        onCheckedChange={(value) => setChecked(!!value)}
                      />
                      <FieldLabel
                        htmlFor="checkout-7j9-same-as-shipping-wgm"
                        className="font-normal"
                      >
                        Set as Today's Word
                      </FieldLabel>
                    </Field>
                  </FieldGroup>
                </FieldSet>

                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-optional-comments">
                        Content
                      </FieldLabel>
                      <Textarea
                        id="checkout-7j9-optional-comments"
                        placeholder="Add your main content here"
                        className="resize-none min-h-75"
                        defaultValue={teachingItems?.mainContent}
                        ref={contentRef}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>

                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-optional-comments">
                        Comments
                      </FieldLabel>
                      <Textarea
                        id="checkout-7j9-optional-comments"
                        placeholder="You can add any reminders to yourself here (only visible to you)"
                        className="resize-none"
                        defaultValue={teachingItems?.comment}
                        ref={commentRef}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <Field
                  orientation="horizontal"
                  className="w-full flex justify-between items-center px-5"
                >
                  <Button
                    variant="outline"
                    type="button"
                    className="w-[40%]"
                    onClick={goBackHandler}
                  >
                    Go Back
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" className="w-[40%]">
                        Submit
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to make these changes?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone and will permanently make
                          modifications.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={teachingEditHandler}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </section>
      )}
      <MainFooter />
    </main>
  );
};

export default EditTeaching;
