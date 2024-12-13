import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useLocation, Meta, Links, ScrollRestoration, Scripts, Outlet, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { createElement, useEffect } from "react";
import ReactGA from "react-ga4";
import { FaInstagram, FaTiktok, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { join, map } from "lodash-es";
import { FiChevronDown, FiMenu, FiX, FiTarget, FiEye } from "react-icons/fi";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, reactRouterContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    reactRouterContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    reactRouterContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, reactRouterContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: reactRouterContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, reactRouterContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: reactRouterContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
const faviconPNG = "/assets/favicon-H1OfEtK8.ico";
const styles = "/assets/index-CqQFYzHR.css";
const links = () => {
  return [{
    rel: "stylesheet",
    href: styles
  }, {
    rel: "icon",
    type: "image/png",
    href: faviconPNG
  }];
};
function Layout({
  children
}) {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });
  }, [location]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-25Y1HDVXXB"
      }), /* @__PURE__ */ jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `
          window.dataLayer = window.dataLayer || [] function gtag(){' '}
          {dataLayer.push(arguments)}
          gtag('js', new Date()) gtag('config', 'G-25Y1HDVXXB')`
        }
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Footer() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "footer",
      className: "flex min-h-60 w-full flex-col items-center justify-center p-8",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex gap-8 md:mb-10", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com/lintonsacademy_ke", target: "_blank", children: /* @__PURE__ */ jsx(FaInstagram, { className: "h-6 w-6 fill-black" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://tiktok.com/@lintonsacademy", target: "_blank", children: /* @__PURE__ */ jsx(FaTiktok, { className: "h-6 w-6 fill-black" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://x.com/LintonsAcademy", target: "_blank", children: /* @__PURE__ */ jsx(FaXTwitter, { className: "h-6 w-6 fill-black" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com/Lintonsacademy", target: "_blank", children: /* @__PURE__ */ jsx(FaFacebookF, { className: "h-6 w-6 fill-black" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center text-sm md:text-base", children: "Westlands, Kenrail Towers, 3rd floor, Northern wing/ Mombasa, SBS Mall" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-center text-sm md:mt-12 md:text-base", children: "© Lintons Academy, 2024. All Rights Reserved" })
      ]
    }
  );
}
const LogoWhite = [
  "/assets/Hair%20Academy%20Logo%20White-DhJBBPce.webp",
  "/assets/Hair%20Academy%20Logo%20White-DNvUD_qe.webp",
  "/assets/Hair%20Academy%20Logo%20White-CoDB0UOE.webp",
  "/assets/Hair%20Academy%20Logo%20White-Diirpe6A.webp"
];
const IndexBackgroundImage = [
  "/assets/salone-parrucchiere_web-DCIlWL5u.webp",
  "/assets/salone-parrucchiere_web-5_E3wkL2.webp",
  "/assets/salone-parrucchiere_web-Crrl82oy.webp",
  "/assets/salone-parrucchiere_web-CGsQnsig.webp"
];
const widths$5 = [480, 640, 1280, 1980];
function Home() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "home",
      className: "relative flex h-screen min-h-screen w-full flex-col items-center justify-center text-primary-foreground",
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "h-full w-full", children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              srcSet: join(
                map(
                  IndexBackgroundImage,
                  (image, index2) => `${image} ${widths$5[index2]}w`
                ),
                ", "
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: IndexBackgroundImage[0],
              className: "h-full w-full object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute flex h-full w-full items-center justify-center bg-black/40", children: [
          /* @__PURE__ */ jsxs("picture", { className: "h-auto w-4/5 md:w-3/5 lg:w-1/2", children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                srcSet: join(
                  map(
                    LogoWhite,
                    (image, index2) => `${image} ${widths$5[index2]}w`
                  ),
                  ", "
                )
              }
            ),
            /* @__PURE__ */ jsx("img", { src: LogoWhite[0], className: "h-auto w-full object-cover" })
          ] }),
          /* @__PURE__ */ jsx(FiChevronDown, { className: "absolute bottom-8 h-12 w-12 md:h-16 md:w-16" })
        ] })
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const LogoBlackImages = [
  "/assets/Beauty%20Academy%20Logo%20Black%20Cropped-D0KBggDl.webp",
  "/assets/Beauty%20Academy%20Logo%20Black%20Cropped-WrAn6Hg1.webp",
  "/assets/Beauty%20Academy%20Logo%20Black%20Cropped-KgCjBoIy.webp",
  "/assets/Beauty%20Academy%20Logo%20Black%20Cropped-SG9E2i97.webp"
];
const widths$4 = [480, 640, 1280, 1980];
const Menu = ({
  className,
  logo = true
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "absolute z-20 flex w-full max-w-screen-xl items-center justify-between px-8 py-6 text-primary-foreground md:px-20 md:py-12 2xl:max-w-screen-2xl",
        { "justify-end": !logo }
      ),
      children: [
        (logo || null) && /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsxs("picture", { className: "h-12 md:h-14", children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              srcSet: join(
                map(
                  LogoBlackImages,
                  (image, index2) => `${image} ${widths$4[index2]}w`
                ),
                ", "
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `${LogoBlackImages[0]}`,
              className: "h-14 w-full object-cover md:h-14"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(Dialog, { children: [
          /* @__PURE__ */ jsx(DialogTrigger, { className: "my-3 h-8", children: /* @__PURE__ */ jsx(FiMenu, { className: cn("h-8 w-8", className) }) }),
          /* @__PURE__ */ jsx(DialogOverlay, {}),
          /* @__PURE__ */ jsx(DialogPrimitive.Content, { className: "fixed inset-y-0 right-0 z-50 flex h-screen w-screen items-center justify-center gap-4 border-r pl-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full max-w-screen-xl flex-col items-end px-8 md:px-20 2xl:max-w-screen-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center py-6 md:py-12", children: /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "my-3 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
              /* @__PURE__ */ jsx(FiX, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-center space-y-10 pb-6 text-right text-xl uppercase md:pb-12", children: [
              /* @__PURE__ */ jsx(NavLink, { className: "block [&.active]:underline", to: "/", children: "Home" }),
              /* @__PURE__ */ jsx(
                NavLink,
                {
                  className: "block [&.active]:underline",
                  to: "/beauty-school",
                  children: "Beauty School"
                }
              ),
              /* @__PURE__ */ jsx(
                NavLink,
                {
                  className: "block [&.active]:underline",
                  to: "/hair-school",
                  children: "Hair School"
                }
              ),
              /* @__PURE__ */ jsx(NavLink, { className: "block [&.active]:underline", to: "/about-us", children: "About Us" }),
              /* @__PURE__ */ jsx(
                NavLink,
                {
                  className: "block [&.active]:underline",
                  to: "/contact-us",
                  children: "Contact Us"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "block",
                  href: "https://cloud.lintonsacademy.com/login#login",
                  target: "_blank",
                  rel: "noopener",
                  children: "Student Portal"
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
};
const HairAcademyImages = [
  "/assets/Main%20photo%20to%20represent%20hair-BQ1n4CVz.webp",
  "/assets/Main%20photo%20to%20represent%20hair-Ty7a2r6W.webp",
  "/assets/Main%20photo%20to%20represent%20hair-yfRqQbNc.webp",
  "/assets/Main%20photo%20to%20represent%20hair-r1fUMMWj.webp"
];
const BeautyAcademyImages = [
  "/assets/0B9A0032-CFYJOo1_.webp",
  "/assets/0B9A0032-CHaFR23G.webp",
  "/assets/0B9A0032-CSOYaoAh.webp",
  "/assets/0B9A0032-D116Tfpj.webp"
];
const widths$3 = [480, 640, 1280, 1980];
function Programs() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "programs",
      className: "mb-8 h-full w-full max-w-screen-lg items-center p-8 2xl:max-w-screen-xl",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 mt-6 w-full text-balance text-center text-xl md:mb-16 md:mt-10 md:max-w-2xl md:text-4xl", children: "Transform Your Passion for Hair and Beauty into a Rewarding Career" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20", children: [
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: "relative w-full md:w-5/12 lg:w-2/5",
              to: "/beauty-school",
              children: /* @__PURE__ */ jsxs("picture", { className: "h-auto w-full", children: [
                /* @__PURE__ */ jsx(
                  "source",
                  {
                    srcSet: join(
                      map(
                        BeautyAcademyImages,
                        (image, index2) => `${image} ${widths$3[index2]}w`
                      ),
                      ", "
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `${BeautyAcademyImages[0]}`,
                    className: "aspect-[500/649] h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 h-full w-full bg-black/60", children: /* @__PURE__ */ jsx("h3", { className: "mt-[97%] text-center font-sans text-2xl text-white underline decoration-2 underline-offset-[10px]", children: "Beauty School" }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            NavLink,
            {
              className: "relative w-full md:w-5/12 lg:w-2/5",
              to: "/hair-school",
              children: [
                /* @__PURE__ */ jsxs("picture", { className: "h-auto w-full", children: [
                  /* @__PURE__ */ jsx(
                    "source",
                    {
                      srcSet: join(
                        map(
                          HairAcademyImages,
                          (image, index2) => `${image} ${widths$3[index2]}w`
                        ),
                        ", "
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `${HairAcademyImages[0]}`,
                      className: "aspect-[500/649] h-full w-full object-cover"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 h-full w-full bg-black/60", children: /* @__PURE__ */ jsx("h3", { className: "mt-[97%] text-center font-sans text-2xl text-white underline decoration-2 underline-offset-[10px]", children: "Hair School" }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Index = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
        gtag('event', 'ads_conversion_Page_view_Page_load_htt_1',{' '}
        {
          // <event_parameters>
        }
        );`
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative flex min-h-screen flex-col items-center",
      children: [/* @__PURE__ */ jsx(Menu, {
        logo: false
      }), /* @__PURE__ */ jsx(Home, {}), /* @__PURE__ */ jsx(Programs, {}), /* @__PURE__ */ jsx(Footer, {})]
    })]
  });
};
const index = withComponentProps(Index);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const HairdressingDiplomaImages = [
  "/assets/Hairdressing%20Diploma-C7K-Shbh.webp",
  "/assets/Hairdressing%20Diploma-C4r6YT5f.webp",
  "/assets/Hairdressing%20Diploma-PbjBPOms.webp",
  "/assets/Hairdressing%20Diploma-C3ccDSgG.webp"
];
const UpskillingCertificatesImages = [
  "/assets/Upskilling-CKrx_v1Y.webp",
  "/assets/Upskilling-BEhdfr_X.webp",
  "/assets/Upskilling-DB0kwfZJ.webp",
  "/assets/Upskilling-yo6ezKm4.webp"
];
const AdvancedMasterclassesImages = [
  "/assets/Masterclass-DW27aOEV.webp",
  "/assets/Masterclass-BcAQE90g.webp",
  "/assets/Masterclass-B15uQ_zx.webp",
  "/assets/Masterclass-hIeyaY7z.webp"
];
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const courses = [
  {
    title: "Hairdressing Diploma",
    content: `The course is divided into 6 in depth modules covering all the subjects needed to provide you with a fast-track to hairdressing success.`,
    duration: "6 Months",
    units: [
      "Intro - Social & Digital 101 Instagram and Tik Tok",
      "Fundamentals of Shampooing & Haircare",
      "Fundamentals of Styling",
      "Fundamentals of Chemical Reformation",
      "Fundamentals of Hair Cutting",
      "Fundamentals of  Coloring"
    ],
    images: HairdressingDiplomaImages
  },
  {
    title: "Upskilling Certificates",
    content: `For qualified and experienced stylists who want to perfect their technical knowledge and skills we offer short 3 day courses on the following;`,
    duration: "3 Days",
    units: [
      "Foundation coloration",
      "Advanced coloration",
      "Master colorist",
      "Total texture: a complete guide to natural hair",
      "Keys to cutting and styling"
    ],
    images: UpskillingCertificatesImages
  },
  {
    title: "Advanced Masterclasses",
    content: `For experienced stylists who want to gain specialist expertise in color and entrepreneurship.`,
    duration: "1 Week",
    units: ["Entrepreneurship", "Expert colorist"],
    images: AdvancedMasterclassesImages
  }
];
const widths$2 = [480, 640, 1280, 1980];
function HairAcademy() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "courses",
      className: "flex h-full min-h-screen w-full max-w-screen-lg flex-col items-center p-8 pt-40 2xl:max-w-screen-xl",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-full w-full grow flex-col items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4", children: map(courses, (course) => /* @__PURE__ */ jsxs(Dialog, { children: [
          /* @__PURE__ */ jsx(DialogTrigger, { className: "rounded-xl", children: /* @__PURE__ */ jsx(Card, { className: "border-none shadow-none", children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2", children: [
            /* @__PURE__ */ jsxs("picture", { className: "mb-2 w-full rounded-xl bg-black/20", children: [
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: join(
                    map(
                      course.images,
                      (image, index2) => `${image} ${widths$2[index2]}w`
                    ),
                    ", "
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `${course.images[0]}`,
                  className: "aspect-[350/430] h-full w-full rounded-xl rounded-b-none object-cover brightness-50"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-left align-text-top font-sans text-base font-bold uppercase opacity-50", children: course.title })
          ] }) }) }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsx(DialogHeader, { className: "mt-4", children: /* @__PURE__ */ jsx(DialogTitle, { className: "mb-1 text-center font-sans uppercase opacity-50", children: course.title }) }),
            /* @__PURE__ */ jsxs(DialogDescription, { className: "text-base", children: [
              course.content,
              /* @__PURE__ */ jsx("ul", { className: "list-disc p-4", children: map(course.units, (unit) => /* @__PURE__ */ jsx("li", { children: unit })) })
            ] }),
            course.duration && /* @__PURE__ */ jsxs("div", { className: "text-center text-lg font-bold uppercase opacity-50", children: [
              "Duration: ",
              course.duration
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 flex w-full items-center justify-center", children: /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                className: "h-auto rounded-b-none rounded-t-xl px-8 py-3 text-lg font-bold uppercase",
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    target: "_blank",
                    href: "https://cloud.lintonsacademy.com/admissions",
                    children: "Apply Now"
                  }
                )
              }
            ) })
          ] })
        ] })) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-8 pt-12", children: /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: "https://cloud.lintonsacademy.com/admissions",
            className: "rounded-t-xl border-[1px] px-8 py-4 text-xl font-semibold uppercase",
            children: /* @__PURE__ */ jsx("span", { className: "opacity-50", children: "Apply Now" })
          }
        ) })
      ]
    }
  );
}
const HairSchool = () => /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsxs("div", {
    className: "relative flex min-h-screen flex-col items-center bg-repeat-round",
    children: [/* @__PURE__ */ jsx(Menu, {
      className: "stroke-black"
    }), /* @__PURE__ */ jsx(HairAcademy, {})]
  }), /* @__PURE__ */ jsx("div", {
    className: "flex w-full items-center justify-center pb-10",
    children: /* @__PURE__ */ jsx("div", {
      className: "mt-8 text-center text-sm md:mt-12 md:text-base",
      children: "© Lintons Academy, 2024. All Rights Reserved"
    })
  })]
});
const hairSchool = withComponentProps(HairSchool);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hairSchool
}, Symbol.toStringTag, { value: "Module" }));
const CreativeMakeupCourseImages = [
  "/assets/Creative%20makeup-Uc1P_8lX.webp",
  "/assets/Creative%20makeup-B4W_gMCk.webp",
  "/assets/Creative%20makeup-BSU7kpL_.webp",
  "/assets/Creative%20makeup-DLSebpBP.webp"
];
const BeautyTherapyOperationsImages = [
  "/assets/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o-qjOC3-bQ.webp",
  "/assets/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o-CxqPFlnl.webp",
  "/assets/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o-D0OJZCBW.webp",
  "/assets/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o-COjnTamq.webp"
];
const PersonalMakeupCourseImages = [
  "/assets/Personal%20makeup-D91lsUFG.webp",
  "/assets/Personal%20makeup-6RJAp-Ps.webp",
  "/assets/Personal%20makeup-CQBHNgfQ.webp",
  "/assets/Personal%20makeup-BBwfCfVb.webp"
];
const BridalMakeupCourseImages = [
  "/assets/Bridal%20makeup-CSoswwxy.webp",
  "/assets/Bridal%20makeup-C7jT0uxP.webp",
  "/assets/Bridal%20makeup-FmJASqZs.webp",
  "/assets/Bridal%20makeup-Da2_Fn6T.webp"
];
const ProstheticsImages = [
  "/assets/Prosthetics_cropped-C4oTUMfn.webp",
  "/assets/Prosthetics_cropped-BdrNyRvC.webp",
  "/assets/Prosthetics_cropped-BkVulsTv.webp",
  "/assets/Prosthetics_cropped-BHMhijtF.webp"
];
const MicroshadingImages = [
  "/assets/shutterstock_2028358535-DDNPFaoH.webp",
  "/assets/shutterstock_2028358535-2SlV5POc.webp",
  "/assets/shutterstock_2028358535-BdkywSbW.webp",
  "/assets/shutterstock_2028358535-BOQe1ySr.webp"
];
const CertificateInMakeupArtistryImages = [
  "/assets/Certificate%20in%20Makeup-_EIrYCz8.webp",
  "/assets/Certificate%20in%20Makeup-DD2uD7D3.webp",
  "/assets/Certificate%20in%20Makeup-DsoWp2d3.webp",
  "/assets/Certificate%20in%20Makeup-D101x65Y.webp"
];
const CertificateInMassageTherapyImages = [
  "/assets/Massage%20Therapy-BQU9N33s.webp",
  "/assets/Massage%20Therapy-CUqw16o2.webp",
  "/assets/Massage%20Therapy-D3kqUeUf.webp",
  "/assets/Massage%20Therapy-BmNTiLdl.webp"
];
const CertificateInSkincareImages = [
  "/assets/463A2423-b8kwLTX4.webp",
  "/assets/463A2423-R56Xekz4.webp",
  "/assets/463A2423-Nl4SwW9v.webp",
  "/assets/463A2423-Ch1iCc1z.webp"
];
const DiplomaInSkincareImages = [
  "/assets/Diploma%20in%20Makeup%20_%20skincare-CpNg0jYb.webp",
  "/assets/Diploma%20in%20Makeup%20_%20skincare-CGx_LlZh.webp",
  "/assets/Diploma%20in%20Makeup%20_%20skincare-D10rS4Eb.webp",
  "/assets/Diploma%20in%20Makeup%20_%20skincare-BhAUAYDA.webp"
];
const CertificateInNailTechnologyImages = [
  "/assets/Nail%20class-gSXQ2Nww.webp",
  "/assets/Nail%20class-DX18IJN7.webp",
  "/assets/Nail%20class-BrIchgG1.webp",
  "/assets/Nail%20class-DP-AyOcn.webp"
];
const masterclassCourses = [
  {
    title: "Creative Makeup Course & Special Effects Makeup (SFX)",
    duration: "1 Week",
    content: "This masterclass is designed for makeup artists looking to advance their skills in creative and special effects makeup. You’ll dive into face and body painting, editorial, theatrical, and runway makeup, mastering techniques that require imagination and precision. The SFX component focuses on creating realistic injuries, aging effects, and character transformations using industry-standard materials like latex and wax. By the end of this intensive course, you’ll be equipped to bring unreal characters to life, making it ideal for those pursuing a career in film, TV, or theater.",
    images: CreativeMakeupCourseImages
  }
];
const shortTermCourses = [
  {
    title: "Prosthetics",
    content: "This course is tailored for aspiring prosthetic makeup artists who want to learn the art of creating realistic three-dimensional character looks and effects. You’ll explore techniques such as casting, sculpting, and molding, which are essential in creating prosthetic appliances used in film, TV, and theater. The course also covers the application and coloring of prosthetics on the skin, enabling you to transform actors into a wide range of characters, from aged individuals to mythical creatures.",
    duration: "1 Month",
    images: ProstheticsImages
  },
  {
    title: "Bridal Makeup Course",
    content: "This focused course is perfect for makeup artists who want to specialize in the bridal industry, one of the most lucrative sectors in beauty. It covers everything from client consultation and skincare preparation to creating a variety of bridal looks, including natural, modern, and cultural-specific styles. The course also offers insights into running a successful bridal makeup business, making it ideal for those looking to expand their services or start their own business.",
    duration: "2 Weeks",
    images: BridalMakeupCourseImages
  },
  {
    title: "Personal Makeup Course",
    content: "Designed for individuals who wish to enhance their personal makeup skills, this course provides practical knowledge in makeup application tailored to your unique features. You’ll learn the essentials of skincare, foundation matching, and the art of applying eye makeup, including liner and lashes. By the end of this course, you’ll have the confidence to create professional-quality makeup looks on yourself for any occasion.",
    duration: "3 Days",
    images: PersonalMakeupCourseImages
  },
  {
    title: "Lash Technology",
    content: "This comprehensive course covers everything you need to become a certified lash technician. It begins with an understanding of lash growth cycles and client consultation, moving on to advanced lash mapping and application techniques. The course also emphasizes industry standards for hygiene and aftercare, ensuring you can provide top-notch services to your clients. Whether you’re looking to start your own lash business or work in a salon, this course gives you the skills to succeed.",
    duration: "2 Months",
    images: BeautyTherapyOperationsImages
  },
  {
    title: "Micro shading/Micro blading",
    content: "This course teaches the precise art of microblading, a semi-permanent makeup technique that creates the illusion of fuller, natural-looking eyebrows. You’ll learn how to map and shape eyebrows, choose the correct pigments, and master the microblading process from start to finish. The course also covers essential topics like skin anatomy, sterilization procedures, and client aftercare, ensuring you deliver professional and safe services.",
    duration: "2 Months",
    images: MicroshadingImages
  },
  {
    title: "Hair Removal Operations",
    content: "Focused on teaching the various techniques of hair removal, this course equips you with the skills needed to offer professional hair removal services. You’ll learn about different methods such as waxing, threading, and laser treatments, and understand how to choose the best technique for each client. The course also emphasizes client safety and comfort, ensuring you can provide effective and pain-minimized hair removal experiences.",
    duration: "1 Month",
    images: BeautyTherapyOperationsImages
  }
];
const longTermCourses = [
  {
    title: "Beauty Therapy Operations",
    content: "This comprehensive course covers all aspects of beauty therapy, from skincare and facial treatments to makeup artistry, nail care, and body treatments like massage. You’ll gain a deep understanding of anatomy and physiology, which is crucial for performing treatments safely and effectively. The course also includes training in salon and spa operations, preparing you to manage or start your own beauty business. With a 2-month internship included, you’ll get hands-on experience in a real-world setting, making you job-ready upon graduation.",
    duration: "6 Months",
    internshipDuration: "2 Months",
    images: BeautyTherapyOperationsImages
  },
  {
    title: "Diploma in Skincare and Makeup Artistry",
    content: "This diploma program offers a deep dive into skincare and makeup artistry, providing you with both theoretical knowledge and practical skills. You’ll learn how to assess skin types, design personalized skincare routines, and create stunning makeup looks for all occasions. The course also includes vocational training in retail management, preparing you for a career as a skincare consultant, makeup artist, spa therapist, or beauty sales advisor. The 2-month internship ensures you gain valuable industry experience, enhancing your employability.",
    duration: "3 Months",
    internshipDuration: "2 Months",
    images: DiplomaInSkincareImages
  },
  {
    title: "Certificate in Makeup Artistry",
    content: "This course is ideal for those who wish to enter the beauty industry as a makeup artist. It covers both fundamental and advanced makeup techniques, including hygiene practices, color theory, and face preparation. The advanced modules delve into creative makeup styles for various occasions, such as bridal, evening, and editorial looks. Whether you’re aiming to work in salons, photographic studios, or as a freelance artist, this course provides the expertise needed to succeed.",
    duration: "3 Months",
    images: CertificateInMakeupArtistryImages
  },
  {
    title: "Certificate in Skincare",
    content: "This certificate course offers a thorough understanding of skincare, from the basics of skin histology and product application to advanced treatments for aging, acne, and environmentally damaged skin. You’ll learn how to perform consultations, design effective skincare routines, and use specialized tools and equipment. Graduates are well-prepared for careers as skin care therapists in spas, salons, or as independent consultants.",
    duration: "3 Months",
    images: CertificateInSkincareImages
  },
  {
    title: "Certificate in Nail Technology",
    content: "This course covers everything from basic nail care to advanced techniques in nail enhancement. You’ll learn how to perform manicures and pedicures, apply gel and acrylic nails, and create intricate nail art designs. The course also includes training in hand and arm massage, making you a well-rounded nail technician ready to work in salons or start your own nail business.",
    images: CertificateInNailTechnologyImages
  },
  {
    title: "Certificate in Massage Therapy",
    content: "Focused on various massage techniques, this course teaches you how to provide therapeutic massages that promote relaxation and well-being. You’ll learn Swedish massage, deep tissue techniques, aromatherapy, and more. The course also covers anatomy and physiology, ensuring you understand the physical benefits of each massage type. Graduates can pursue careers in spas, wellness centers, or as freelance massage therapists.",
    duration: "2 Months",
    images: CertificateInMassageTherapyImages
  }
];
const widths$1 = [480, 640, 1280, 1980];
function BeautyAcademy() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "courses",
      className: "h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 2xl:max-w-screen-xl",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full grow flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxs("h2", { className: "mb-8 flex w-full items-center justify-center text-center text-2xl uppercase", children: [
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" }),
            /* @__PURE__ */ jsx("span", { className: "shrink-0 px-16", children: "Long Term Courses" }),
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4", children: map(longTermCourses, (course) => /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { className: "rounded-xl", children: /* @__PURE__ */ jsx(Card, { className: "border-none shadow-none", children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2", children: [
              /* @__PURE__ */ jsxs("picture", { className: "mb-2 w-full rounded-xl bg-black/20", children: [
                /* @__PURE__ */ jsx(
                  "source",
                  {
                    srcSet: join(
                      map(
                        course.images,
                        (image, index2) => `${image} ${widths$1[index2]}w`
                      ),
                      ", "
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `${course.images[0]}`,
                    className: "aspect-[350/430] h-full w-full rounded-xl rounded-b-none object-cover brightness-50"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-left align-text-top font-sans text-base font-bold opacity-50", children: course.title })
            ] }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { className: "mt-4", children: /* @__PURE__ */ jsx(DialogTitle, { className: "mb-1 text-center font-sans uppercase opacity-50", children: course.title }) }),
              /* @__PURE__ */ jsx(DialogDescription, { className: "text-base", children: course.content }),
              course.duration && /* @__PURE__ */ jsxs("div", { className: "text-center text-lg font-bold uppercase opacity-50", children: [
                "Duration: ",
                course.duration,
                " ",
                course.internshipDuration && `+ ${course.internshipDuration} Internship`
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 flex w-full items-center justify-center", children: /* @__PURE__ */ jsx(
                Button,
                {
                  asChild: true,
                  className: "h-auto rounded-b-none rounded-t-xl px-8 py-3 text-lg font-bold uppercase",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      target: "_blank",
                      href: "https://cloud.lintonsacademy.com/admissions",
                      children: "Apply Now"
                    }
                  )
                }
              ) })
            ] })
          ] })) }),
          /* @__PURE__ */ jsxs("h2", { className: "mb-8 mt-16 flex w-full items-center justify-center text-center text-2xl uppercase", children: [
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" }),
            /* @__PURE__ */ jsx("span", { className: "shrink-0 px-16", children: "Short Term Courses" }),
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4", children: map(shortTermCourses, (course) => /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { className: "rounded-xl", children: /* @__PURE__ */ jsx(Card, { className: "border-none shadow-none", children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2", children: [
              /* @__PURE__ */ jsxs("picture", { className: "mb-2 w-full rounded-xl bg-black/20", children: [
                /* @__PURE__ */ jsx(
                  "source",
                  {
                    srcSet: join(
                      map(
                        course.images,
                        (image, index2) => `${image} ${widths$1[index2]}w`
                      ),
                      ", "
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `${course.images[0]}`,
                    className: "aspect-[350/430] h-full w-full rounded-xl rounded-b-none object-cover brightness-50"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-left align-text-top font-sans text-base font-bold opacity-50", children: course.title })
            ] }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { className: "mt-4", children: /* @__PURE__ */ jsx(DialogTitle, { className: "mb-1 text-center font-sans uppercase opacity-50", children: course.title }) }),
              /* @__PURE__ */ jsx(DialogDescription, { className: "text-base", children: course.content }),
              course.duration && /* @__PURE__ */ jsxs("div", { className: "text-center text-lg font-bold uppercase opacity-50", children: [
                "Duration: ",
                course.duration
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 flex w-full items-center justify-center", children: /* @__PURE__ */ jsx(
                Button,
                {
                  asChild: true,
                  className: "h-auto rounded-b-none rounded-t-xl px-8 py-3 text-lg font-bold uppercase",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      target: "_blank",
                      href: "https://cloud.lintonsacademy.com/admissions",
                      children: "Apply Now"
                    }
                  )
                }
              ) })
            ] })
          ] })) }),
          /* @__PURE__ */ jsxs("h2", { className: "mb-8 mt-16 flex w-full items-center justify-center text-center text-2xl uppercase", children: [
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" }),
            /* @__PURE__ */ jsx("span", { className: "shrink-0 px-16", children: "Masterclass Courses" }),
            /* @__PURE__ */ jsx("span", { className: "h-[3px] w-full bg-black" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4", children: map(masterclassCourses, (course) => /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { className: "rounded-xl", children: /* @__PURE__ */ jsx(Card, { className: "border-none shadow-none", children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2", children: [
              /* @__PURE__ */ jsxs("picture", { className: "mb-2 w-full rounded-xl bg-black/20", children: [
                /* @__PURE__ */ jsx(
                  "source",
                  {
                    srcSet: join(
                      map(
                        course.images,
                        (image, index2) => `${image} ${widths$1[index2]}w`
                      ),
                      ", "
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `${course.images[0]}`,
                    className: "aspect-[350/430] h-full w-full rounded-xl rounded-b-none object-cover brightness-50"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-left align-text-top font-sans text-base font-bold opacity-50", children: course.title })
            ] }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { className: "mt-4", children: /* @__PURE__ */ jsx(DialogTitle, { className: "mb-1 text-center font-sans uppercase opacity-50", children: course.title }) }),
              /* @__PURE__ */ jsx(DialogDescription, { className: "text-base", children: course.content }),
              course.duration && /* @__PURE__ */ jsxs("div", { className: "text-center text-lg font-bold uppercase opacity-50", children: [
                "Duration: ",
                course.duration
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 flex w-full items-center justify-center", children: /* @__PURE__ */ jsx(
                Button,
                {
                  asChild: true,
                  className: "h-auto rounded-b-none rounded-t-xl px-8 py-3 text-lg font-bold uppercase",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      target: "_blank",
                      href: "https://cloud.lintonsacademy.com/admissions",
                      children: "Apply Now"
                    }
                  )
                }
              ) })
            ] })
          ] })) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-8 pt-12", children: /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: "https://cloud.lintonsacademy.com/admissions",
            className: "rounded-t-xl border-[1px] px-8 py-4 text-xl font-semibold uppercase",
            children: /* @__PURE__ */ jsx("span", { className: "opacity-50", children: "Apply Now" })
          }
        ) })
      ]
    }
  );
}
const BeautyCourses = () => /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("script", {
    dangerouslySetInnerHTML: {
      __html: `
      gtag('event', 'ads_conversion_Page_view_Beauty_School_1',{' '}
      {
        // <event_parameters>
      }
      );`
    }
  }), /* @__PURE__ */ jsxs("div", {
    className: "relative flex min-h-screen flex-col items-center bg-repeat-round",
    children: [/* @__PURE__ */ jsx(Menu, {
      className: "stroke-black"
    }), /* @__PURE__ */ jsx(BeautyAcademy, {})]
  }), /* @__PURE__ */ jsx("div", {
    className: "flex w-full items-center justify-center pb-10",
    children: /* @__PURE__ */ jsx("div", {
      className: "mt-8 text-center text-sm md:mt-12 md:text-base",
      children: "© Lintons Academy, 2024. All Rights Reserved"
    })
  })]
});
const beautySchool = withComponentProps(BeautyCourses);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: beautySchool
}, Symbol.toStringTag, { value: "Module" }));
function Contacts() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "contact-us",
      className: "flex min-h-screen w-full flex-col items-center justify-center pb-10 pt-28",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "my-auto grid grid-cols-1 gap-24 border-b-[1px] border-t-[1px] border-black py-10 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex max-w-64 flex-col items-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl uppercase", children: "Nairobi" }),
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-balance text-center", children: "Westlands, Kenrail Towers 3rd floor, Northern wing" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+254714870037", className: "mb-2", children: "+254 714 870 037" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:academy@lintonsbeauty.com", className: "underline", children: "academy@lintonsbeauty.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl uppercase", children: "Mombasa" }),
            /* @__PURE__ */ jsx("div", { className: "mb-2 flex grow items-center justify-center", children: "SBS Mall" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+254714870037", className: "mb-2", children: "+254 714 870 037" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:academy@lintonsbeauty.com", className: "underline", children: "academy@lintonsbeauty.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-10 flex gap-8", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/lintons_hairacademyby_loreal?hl=en",
              target: "_blank",
              children: /* @__PURE__ */ jsx(FaInstagram, { className: "h-6 w-6 fill-black" })
            }
          ),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@lintonshairacadem", target: "_blank", children: /* @__PURE__ */ jsx(FaTiktok, { className: "h-6 w-6 fill-black" }) }),
          /* @__PURE__ */ jsx(FaXTwitter, { className: "h-6 w-6 fill-black" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.facebook.com/profile.php?id=61560379441181&mibextid=ZbWKwL",
              target: "_blank",
              children: /* @__PURE__ */ jsx(FaFacebookF, { className: "h-6 w-6 fill-black" })
            }
          )
        ] })
      ]
    }
  );
}
const AboutUs$1 = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
        // Helper function to delay opening a URL until a gtag event is sent.
        // Call it in response to an action that should navigate to a URL.
        function gtagSendEvent(url) {
          var callback = function () {
            if (typeof url === 'string') {
              window.location = url;
            }
          };
          gtag('event', 'ads_conversion_Contact_Us_1', {
            'event_callback': callback,
            'event_timeout': 2000,
            // <event_parameters>
          });
          return false;
        }`
      }
    }), /* @__PURE__ */ jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
        gtag('event', 'conversion_event_phone_call_lead', {
          // <event_parameters>
        });`
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative flex min-h-screen flex-col items-center",
      children: [/* @__PURE__ */ jsx(Menu, {
        className: "stroke-black"
      }), /* @__PURE__ */ jsx(Contacts, {})]
    }), /* @__PURE__ */ jsx("div", {
      className: "flex w-full items-center justify-center pb-10",
      children: /* @__PURE__ */ jsx("div", {
        className: "text-center text-sm md:text-base",
        children: "© Lintons Academy, 2024. All Rights Reserved"
      })
    })]
  });
};
const contactUs = withComponentProps(AboutUs$1);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contactUs
}, Symbol.toStringTag, { value: "Module" }));
const AlumniStoriesImages = [
  "/assets/LGP-10%20(1)-GEGzHrYS.webp",
  "/assets/LGP-10%20(1)-BujlxkcI.webp",
  "/assets/LGP-10%20(1)-CK4aXksv.webp",
  "/assets/LGP-10%20(1)-D7qKGfxX.webp"
];
const CollageImage = [
  "/assets/0B9A0026%20(1)-CTf7uK0X.webp",
  "/assets/0B9A0026%20(1)-B6hl9G6G.webp",
  "/assets/0B9A0026%20(1)-kebVRi0X.webp",
  "/assets/0B9A0026%20(1)-CRhXkBFT.webp"
];
const widths = [480, 640, 1280, 1980];
function About() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "about",
      className: "mt-28 flex min-h-screen w-full flex-col items-center justify-center pb-10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mt-10 max-w-screen-lg items-center px-8 2xl:max-w-screen-xl", children: [
          /* @__PURE__ */ jsxs("picture", { className: "h-auto w-full", children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                srcSet: join(
                  map(
                    AlumniStoriesImages,
                    (image, index2) => `${image} ${widths[index2]}w`
                  ),
                  ", "
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: AlumniStoriesImages[0],
                className: "mb-10 aspect-[1128/575] h-full w-full object-cover"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
            "At Lintons Academy, we began with a clear vision: to elevate Kenya’s beauty industry to global standards. Driven by a passion for excellence, we recognized the need to nurture and develop the immense talent within our country. Our mission is to transform the lives of youth by equipping them with the skills and knowledge to thrive in the beauty industry, while promoting authentic Afro beauty.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "As a leading Beauty and Hair School, Lintons Academy offers more than just courses; we provide a gateway to opportunity. With campuses in Nairobi and Mombasa, our students are future industry leaders, trained by experienced professionals in state-of-the-art facilities. Our hands-on approach ensures that every student is prepared for real-world success from day one.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("picture", { className: "h-auto w-full", children: [
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: join(
                    map(
                      CollageImage,
                      (image, index2) => `${image} ${widths[index2]}w`
                    ),
                    ", "
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: CollageImage[0],
                  className: "my-10 aspect-[1128/575] h-full w-full object-cover"
                }
              )
            ] }),
            "Our expansion to the vibrant coastal region with our Mombasa Campus reflects our commitment to inclusivity and excellence. This campus honors coastal culture and Islamic values, particularly in Makeup and Bridal Makeup classes, offering tailored education that celebrates cultural heritage.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "We take immense pride in partnering with global beauty leader L'Oréal, a brand synonymous with innovation and excellence in hair care. Through this collaboration, our Hair School students gain access to the highest quality products and industry expertise, ensuring they are equipped with the best tools and knowledge for success. Beyond the classroom, we connect our students with prestigious spas, salons, and cosmetic retailers, providing them with invaluable opportunities to launch thriving careers in the beauty industry.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Enrolling at Lintons Academy means joining a prestigious community that’s making a real difference in the beauty industry. We invite you to be part of this journey—where your passion for beauty meets professional excellence, and your dreams of a rewarding career become reality."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex w-full max-w-screen-lg flex-col items-center gap-8 p-8 text-center md:flex-row md:gap-0 lg:justify-around 2xl:max-w-screen-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs("h2", { className: "mb-2 flex shrink-0 items-center gap-1 whitespace-nowrap text-center text-2xl", children: [
              /* @__PURE__ */ jsx(FiTarget, {}),
              "our mission"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-md text-balance text-lg", children: "To elevate the standards and reputation of hair & beauty professionals across Africa." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs("h2", { className: "mb-2 flex shrink-0 items-center gap-1 whitespace-nowrap text-center text-2xl", children: [
              /* @__PURE__ */ jsx(FiEye, {}),
              "our vision"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-md text-balance text-lg", children: "To transform the lives & livelihoods of youth across the world with authentic Afro Beauty." })
          ] })
        ] })
      ]
    }
  );
}
const AboutUs = () => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "relative flex min-h-screen flex-col items-center",
      children: [/* @__PURE__ */ jsx(Menu, {
        className: "stroke-black"
      }), /* @__PURE__ */ jsx(About, {}), /* @__PURE__ */ jsx(Footer, {})]
    })
  });
};
const aboutUs = withComponentProps(AboutUs);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aboutUs
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BuAN4JNh.js", "imports": ["/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/index-C61taIVb.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CNT-_j8p.js", "imports": ["/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/index-C61taIVb.js", "/assets/with-props-BGqgUz1f.js"], "css": [] }, "pages/index": { "id": "pages/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-CMEd8E1l.js", "imports": ["/assets/with-props-BGqgUz1f.js", "/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/footer-CJRxYHXz.js", "/assets/menu-cX-Na9Sw.js", "/assets/index-j7NL-zZx.js", "/assets/index-C61taIVb.js"], "css": [] }, "pages/hair-school": { "id": "pages/hair-school", "parentId": "root", "path": "hair-school", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/hair-school-BX2t32hC.js", "imports": ["/assets/with-props-BGqgUz1f.js", "/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/button-DpyCts-h.js", "/assets/menu-cX-Na9Sw.js", "/assets/index-C61taIVb.js"], "css": [] }, "pages/beauty-school": { "id": "pages/beauty-school", "parentId": "root", "path": "beauty-school", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/beauty-school-ClJTBVJI.js", "imports": ["/assets/with-props-BGqgUz1f.js", "/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/button-DpyCts-h.js", "/assets/menu-cX-Na9Sw.js", "/assets/index-C61taIVb.js"], "css": [] }, "pages/contact-us": { "id": "pages/contact-us", "parentId": "root", "path": "contact-us", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-us-Beu8mzD7.js", "imports": ["/assets/with-props-BGqgUz1f.js", "/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/index-j7NL-zZx.js", "/assets/menu-cX-Na9Sw.js", "/assets/index-C61taIVb.js"], "css": [] }, "pages/about-us": { "id": "pages/about-us", "parentId": "root", "path": "about-us", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-us-CD2v313D.js", "imports": ["/assets/with-props-BGqgUz1f.js", "/assets/chunk-D52XG6IA-6zk5tNpU.js", "/assets/menu-cX-Na9Sw.js", "/assets/footer-CJRxYHXz.js", "/assets/index-C61taIVb.js", "/assets/index-j7NL-zZx.js"], "css": [] } }, "url": "/assets/manifest-8d162050.js", "version": "8d162050" };
const assetsBuildDirectory = "dist\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "pages/index": {
    id: "pages/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "pages/hair-school": {
    id: "pages/hair-school",
    parentId: "root",
    path: "hair-school",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "pages/beauty-school": {
    id: "pages/beauty-school",
    parentId: "root",
    path: "beauty-school",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "pages/contact-us": {
    id: "pages/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "pages/about-us": {
    id: "pages/about-us",
    parentId: "root",
    path: "about-us",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
