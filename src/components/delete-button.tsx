"use client";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

const deleteHandler = () => {
  toast(<div className="text-base">Image deleted successfully!</div>);
};

export default function DeleteButton() {
  return (
    <Button onClick={deleteHandler} variant="destructive">
      Delete
    </Button>
  );
}
