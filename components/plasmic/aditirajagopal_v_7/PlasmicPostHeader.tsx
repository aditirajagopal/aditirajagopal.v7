// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Xs5TeWC1PCRPBorm9sVyK
// Component: HVzZVFvQDMt
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aditirajagopal_v_7.module.css"; // plasmic-import: 5Xs5TeWC1PCRPBorm9sVyK/projectcss
import sty from "./PlasmicPostHeader.module.css"; // plasmic-import: HVzZVFvQDMt/css

export type PlasmicPostHeader__VariantMembers = {};

export type PlasmicPostHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicPostHeader__VariantsArgs;
export const PlasmicPostHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicPostHeader__ArgsType = {
  postTitle?: React.ReactNode;
  date?: React.ReactNode;
  blogTitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPostHeader__ArgsType;
export const PlasmicPostHeader__ArgProps = new Array<ArgPropType>(
  "postTitle",
  "date",
  "blogTitle"
);

export type PlasmicPostHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultPostHeaderProps {
  postTitle?: React.ReactNode;
  date?: React.ReactNode;
  blogTitle?: React.ReactNode;
  className?: string;
}

function PlasmicPostHeader__RenderFunc(props: {
  variants: PlasmicPostHeader__VariantsArgs;
  args: PlasmicPostHeader__ArgsType;
  overrides: PlasmicPostHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
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
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={"/thought" as const}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Plasmic Starter Blog",
          value: args.blogTitle,
          className: classNames(sty.slotTargetBlogTitle)
        })}
      </p.PlasmicLink>

      {p.renderPlasmicSlot({
        defaultContents: "Hello world",
        value: args.postTitle,
        className: classNames(sty.slotTargetPostTitle)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "January 1, 2020",
        value: args.date,
        className: classNames(sty.slotTargetDate)
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPostHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPostHeader__VariantsArgs;
    args?: PlasmicPostHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPostHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPostHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPostHeader__ArgProps,
      internalVariantPropNames: PlasmicPostHeader__VariantProps
    });

    return PlasmicPostHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPostHeader";
  } else {
    func.displayName = `PlasmicPostHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicPostHeader = Object.assign(
  // Top-level PlasmicPostHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicPostHeader
    internalVariantProps: PlasmicPostHeader__VariantProps,
    internalArgProps: PlasmicPostHeader__ArgProps
  }
);

export default PlasmicPostHeader;
/* prettier-ignore-end */
