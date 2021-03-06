// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Xs5TeWC1PCRPBorm9sVyK
// Component: RVqnht4VpY
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantstwMp01PTCp0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TwMp01pTCp0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aditirajagopal_v_7.module.css"; // plasmic-import: 5Xs5TeWC1PCRPBorm9sVyK/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: RVqnht4VpY/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 9ln7UQtuabq/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 5SKpbgno6I6/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 4QJoZN4Ndzf/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
};

export interface DefaultHomeProps {}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstwMp01PTCp0()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Home"}</title>
        <meta key="og:title" property="og:title" content={"Home"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__l9Nnb)}
              >
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"aditi rajagopal"}
                </h2>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nZOb
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Midwest VC. Data Scientist. Engineer"}
                    </span>
                    <React.Fragment>{" at heart"}</React.Fragment>
                  </React.Fragment>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uiElk
                  )}
                >
                  {
                    "Hi there! My name is Aditi. I'm a startup investor and data scientist at Invest Detroit Ventures. I'm an alum of University of Virginia, CoderPad, IBM, and University of Michigan "
                  }
                </div>

                <div
                  className={classNames(projectcss.all, sty.freeBox___1OkJf)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__laLoF)}
                  >
                    <Icon3Icon
                      className={classNames(projectcss.all, sty.svg__dr4W)}
                      href={"twitter.com/aditi_rajagopal" as const}
                      role={"img"}
                    />

                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__fjr5L)}
                      href={"github.com/aditirajagopal" as const}
                      role={"img"}
                    />

                    <Icon28Icon
                      className={classNames(projectcss.all, sty.svg__mp8Zi)}
                      href={"linkedin.com/in/aditirajagopal" as const}
                      role={"img"}
                    />
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jwc8D
                    )}
                  >
                    {"Last Updated: January 2022"}
                  </div>
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sBaqX)}
              >
                {true ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__rCckN
                    )}
                    component={Link}
                    href={"/thoughts" as const}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hEBiR
                      )}
                    >
                      {"????"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xWiFm
                      )}
                    >
                      {"thoughts"}
                    </div>
                  </p.PlasmicLink>
                ) : null}

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fRm
                  )}
                  component={Link}
                  href={
                    "https://docs.google.com/presentation/d/1Ny9aHgFQwBlinCT89NTFoAbBDlvc0e-MScjfvRk9IKs/edit#slide=id.g947f5a6932_1_98" as const
                  }
                  platform={"nextjs"}
                  target={"_blank" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vJngL
                    )}
                  >
                    {"????"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pV2Fj
                    )}
                  >
                    {"working with me"}
                  </div>
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fjh7R
                  )}
                  component={Link}
                  href={
                    "https://github.com/aditirajagopal/aditirajagopal/blob/master/src/components/Aditi_Rajagopal_Portfolio.pdf" as const
                  }
                  platform={"nextjs"}
                  target={"_blank" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uOlJz
                    )}
                  >
                    {"????"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mlqz1
                    )}
                  >
                    {"portfolio"}
                  </div>
                </p.PlasmicLink>

                {true ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__mYKz5
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fmiK0
                      )}
                    >
                      {"????"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pQnc
                      )}
                    >
                      {"learning"}
                    </div>
                  </p.PlasmicLink>
                ) : null}
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "foreground", "h2"],
  section: ["section", "foreground", "h2"],
  foreground: ["foreground", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  foreground: "div";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    foreground: makeNodeComponent("foreground"),
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
