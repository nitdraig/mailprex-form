type FormData = {
  fullname: string;
  email: string;
  message: string;
  phone: string;
  service: string;
};

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: any;
};

type UseMailprexProps = {
  url: string;
  webName: string;
  emailDestiny: string;
  formToken: string;
};

declare function useMailprex(props: UseMailprexProps): {
  formData: FormData;
  handleChange: (
    e:
      | Event
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
  ) => void;
  handleSubmit: (e: Event | React.FormEvent<HTMLFormElement>) => Promise<void>;
  response: ApiResponse<any>;
};

export default useMailprex;
