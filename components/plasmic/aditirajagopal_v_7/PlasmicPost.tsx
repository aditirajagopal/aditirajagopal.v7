// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Xs5TeWC1PCRPBorm9sVyK
// Component: 5GtUtT6LtET
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
import PostHeader from "../../PostHeader"; // plasmic-import: HVzZVFvQDMt/component

import { useScreenVariants as useScreenVariantstwMp01PTCp0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TwMp01pTCp0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aditirajagopal_v_7.module.css"; // plasmic-import: 5Xs5TeWC1PCRPBorm9sVyK/projectcss
import sty from "./PlasmicPost.module.css"; // plasmic-import: 5GtUtT6LtET/css

export type PlasmicPost__VariantMembers = {};

export type PlasmicPost__VariantsArgs = {};
type VariantPropType = keyof PlasmicPost__VariantsArgs;
export const PlasmicPost__VariantProps = new Array<VariantPropType>();

export type PlasmicPost__ArgsType = {
  contents?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPost__ArgsType;
export const PlasmicPost__ArgProps = new Array<ArgPropType>("contents");

export type PlasmicPost__OverridesType = {
  root?: p.Flex<"div">;
  postHeader?: p.Flex<typeof PostHeader>;
  container?: p.Flex<"div">;
  previousPost?: p.Flex<"a"> & Partial<LinkProps>;
  nextPost?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultPostProps {}

function PlasmicPost__RenderFunc(props: {
  variants: PlasmicPost__VariantsArgs;
  args: PlasmicPost__ArgsType;
  overrides: PlasmicPost__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstwMp01PTCp0()
  });

  return (
    <React.Fragment>
      {}

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
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__csc9Y)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gfn2U
              )}
              component={Link}
              href={"/" as const}
              platform={"nextjs"}
            >
              {"aditi rajagopal"}
            </p.PlasmicLink>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__reirU)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___9UM
                )}
                component={Link}
                href={"/thoughts" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aubz5
                  )}
                >
                  {"????"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0VPl9
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "thoughts"
                    : "thoughts"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__kQzza
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
                    sty.text__qzpc2
                  )}
                >
                  {"????"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7CfmM
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "working with me"
                    : "working with me"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__szoVr
                )}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dGxw
                  )}
                >
                  {"????"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vwqAl
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "portfolio"
                    : "portfolio"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___0BJrB
                )}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zvhUh
                  )}
                >
                  {"????"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mLaz
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "learning"
                    : "learning"}
                </div>
              </p.PlasmicLink>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tdihX)}
          >
            <PostHeader
              data-plasmic-name={"postHeader"}
              data-plasmic-override={overrides.postHeader}
              blogTitle={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x13Rp
                  )}
                >
                  {"thoughts monthly"}
                </div>
              }
              className={classNames("__wab_instance", sty.postHeader)}
              date={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tVqP6
                  )}
                >
                  {"January 1, 2020"}
                </div>
              }
              postTitle={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vFY3
                  )}
                >
                  {"Hello world"}
                </div>
              }
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lIUx7)}
            >
              <div
                data-plasmic-name={"container"}
                data-plasmic-override={overrides.container}
                className={classNames(projectcss.all, sty.container)}
              >
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Blogging is so much fun! I could write on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on",
                  value: args.contents,
                  className: classNames(sty.slotTargetContents)
                })}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__xj3B3)} />

              <div className={classNames(projectcss.all, sty.freeBox__yPhu6)}>
                <p.PlasmicLink
                  data-plasmic-name={"previousPost"}
                  data-plasmic-override={overrides.previousPost}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.previousPost
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Previous"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  data-plasmic-name={"nextPost"}
                  data-plasmic-override={overrides.nextPost}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.nextPost
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Next"}
                </p.PlasmicLink>
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "postHeader", "container", "previousPost", "nextPost"],
  postHeader: ["postHeader"],
  container: ["container"],
  previousPost: ["previousPost"],
  nextPost: ["nextPost"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  postHeader: typeof PostHeader;
  container: "div";
  previousPost: "a";
  nextPost: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPost__VariantsArgs;
    args?: PlasmicPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPost__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPost__ArgProps,
      internalVariantPropNames: PlasmicPost__VariantProps
    });

    return PlasmicPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPost";
  } else {
    func.displayName = `PlasmicPost.${nodeName}`;
  }
  return func;
}

export const PlasmicPost = Object.assign(
  // Top-level PlasmicPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    postHeader: makeNodeComponent("postHeader"),
    container: makeNodeComponent("container"),
    previousPost: makeNodeComponent("previousPost"),
    nextPost: makeNodeComponent("nextPost"),

    // Metadata about props expected for PlasmicPost
    internalVariantProps: PlasmicPost__VariantProps,
    internalArgProps: PlasmicPost__ArgProps
  }
);

export default PlasmicPost;
/* prettier-ignore-end */
