"use client";

import { UserAuth } from "@/app/context/auth-context";
import { TeacherForm } from "@/app/context/teaching-form-context";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import { redirect } from "next/navigation";

import { useRef, useState } from "react";
import { SELECTOPTIONS } from "../../new-question/page";

function randomHexColor(): string {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  return `#${randomNumber.toString(16).padStart(6, "0")}`;
}

interface AddTeachingFirstProps {
  switchPage: (value: Boolean) => void;
  firstPageEnded: Boolean;
}

const AddTeachingFirst = (props: AddTeachingFirstProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { isPosted, postInitialContent } = TeacherForm();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(true);
  const [priorityValue, setPriorityValue] = useState<number>(2);

  // console.log(props.firstPageEnded)

  const onSelectOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriorityValue(+e.target.value);
  };

  const handleFileChange = (event: any) => {
    setImageFile(event?.target.files[0]);
  };

  const onProceedClickHandler = () => {
    const hexColor = randomHexColor();
    postInitialContent({
      title: titleRef.current?.value,
      imageUrl: undefined,
      imageColor: hexColor,
      description: descriptionRef.current?.value,
      todaysWord: checked,
      priority: SELECTOPTIONS.find(
        (item) => item.priorityRank === priorityValue,
      )?.priority,
      priorityRank: priorityValue,
    });
    props.switchPage(true);
  };

  const onCloseHandler = () => {
    redirect("/teacher");
  };

  return (
    <section
      className={`w-[85%] sm:max-2xl:w-[80%] my-5 flex justify-center items-center transition-all duration-500 ease-in-out
        ${
          !props.firstPageEnded
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none hidden"
        }`}
    >
      <div className="w-full max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="w-full text-center">
                Set Details
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
                    Your image will be displayed as the banner for this teaching
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
                  <FieldLabel htmlFor="checkout-7j9-question-link">
                    Display Priority
                  </FieldLabel>
                  <div>
                    <select
                      value={priorityValue}
                      onChange={onSelectOptionChange}
                      className="border border-zinc-400 px-2 py-3 rounded-sm"
                    >
                      {SELECTOPTIONS.map(({ priority, priorityRank }) => (
                        <option key={priorityRank} value={priorityRank}>
                          {priority}
                        </option>
                      ))}
                    </select>
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>

            <Field
              orientation="horizontal"
              className="w-full flex justify-between items-center px-5"
            >
              <Button
                type="submit"
                className="w-[40%]"
                onClick={onProceedClickHandler}
              >
                Proceed{" "}
                <span>
                  <MoveRight />
                </span>
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-[40%]"
                onClick={onCloseHandler}
              >
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default AddTeachingFirst;
