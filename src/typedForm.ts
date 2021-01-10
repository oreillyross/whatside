// @flow
interface Form<T> {
  values: T;
}

interface contact {
  name: string;
  email: string;
  approved: boolean;
}

const contactForm: Form<contact> = {
  values: {
    name: "Bob",
    email: "bob@home.com",
    approved: true,
  },
};

export { contactForm };
