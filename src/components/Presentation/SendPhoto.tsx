import * as Dialog from "@radix-ui/react-dialog";
import { Image, CircleNotch } from "phosphor-react";
import { useState, useEffect } from "react";
import sendPhoto from "../../services/sendPhoto";
import { usePhotos } from "../../hooks/usePhotos";
import { toast } from "react-toastify";

export function SendPhoto() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { insertPhoto } = usePhotos();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (file) {
      setIsLoading(true);

      try {
        const uploadedPhotoURL = await sendPhoto(file);

        insertPhoto(uploadedPhotoURL);
        toast.success("Foto enviada com sucesso!");
      } catch (err) {
        toast.error("Erro ao enviar foto!");
      } finally {
        setIsLoading(false);
        setOpen((state) => !state);
      }
    }
  }

  useEffect(() => {
    if (!open) {
      setFile(null);
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="mt-8 inline-block h-12 w-28 rounded-md bg-red-400 font-bold text-white lg:h-14 lg:w-32">
          Faça Parte!
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-[rgba(0,0,0,0.6)]" />
        <Dialog.Content className="data-[state=open]:animate-show-in fixed left-1/2 top-1/2 z-20 w-[720px] max-w-[95%] bg-white shadow-md">
          <form
            className="flex flex-col items-center p-4 lg:p-8"
            onSubmit={handleSubmit}
          >
            <label
              data-file={!!file}
              className="grid aspect-video w-full cursor-pointer place-items-center overflow-hidden rounded-lg border-dashed border-red-400 data-[file=false]:border-2"
              htmlFor="file"
            >
              {file ? (
                <img
                  className="aspect-video rounded-lg object-contain"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              ) : (
                <Image className="h-24 w-24 text-red-400 lg:h-32 lg:w-32" />
              )}
            </label>
            <input
              className="sr-only"
              id="file"
              required
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => {
                if (e.target.files) {
                  const [file] = e.target.files;
                  setFile(file);
                }
              }}
            />
            <p className="mt-4 w-full text-sm text-zinc-600 lg:text-base">
              *Ao clicar em enviar, você permite que a sua imagem seja
              publicada.
            </p>
            <div className="mt-6 flex w-full justify-center gap-8 ">
              <button
                disabled={isLoading}
                type="submit"
                className="grid h-12 w-28 place-items-center rounded-md border-2 border-red-400 bg-red-400 font-bold text-white disabled:cursor-not-allowed disabled:opacity-75 lg:h-14 lg:w-32"
              >
                {isLoading ? (
                  <CircleNotch className="h-6 w-6 animate-spin text-white" />
                ) : (
                  <span>Enviar</span>
                )}
              </button>
              <Dialog.Close asChild>
                <button
                  disabled={isLoading}
                  className="inline-block h-12 w-28 rounded-md border-2 border-red-400 font-bold text-red-400 disabled:cursor-not-allowed disabled:opacity-75 lg:h-14 lg:w-32"
                >
                  Cancelar
                </button>
              </Dialog.Close>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
