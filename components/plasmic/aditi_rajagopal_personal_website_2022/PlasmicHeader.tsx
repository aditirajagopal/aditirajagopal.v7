// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hRsY5NbPeCQT1m4ubZULqa
// Component: ehCSLGzmt76
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

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
import CopyableLink from "../../CopyableLink"; // plasmic-import: sGqSkRLs-FT/component

import { useScreenVariants as useScreenVariantsc8HlPs3Ggff } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: C8HlPs3Ggff/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_aditi_rajagopal_personal_website_2022.module.css"; // plasmic-import: hRsY5NbPeCQT1m4ubZULqa/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: ehCSLGzmt76/css

export type PlasmicHeader__VariantMembers = {};

export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  dataFetches?: PlasmicHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsc8HlPs3Ggff()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___1NMjT
        )}
      >
        {"aditi rajagopal"}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__pI7F)}>
        <p.Stack
          as={p.PlasmicLink}
          hasGap={true}
          className={classNames(projectcss.a, sty.link__kYzmB)}
          component={Link}
          href={
            hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? ("/thoughts" as const)
              : undefined
          }
          platform={"nextjs"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__t2VNb)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kgREl
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "💭"
                : "💭"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oXOcF)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Bsgd
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "thoughts"
                : "thoughts"}
            </div>
          </p.Stack>
        </p.Stack>

        {(
          hasVariant(globalVariants, "screen", "tabletOrSmaller") ? true : true
        ) ? (
          <CopyableLink
            className={classNames("__wab_instance", sty.copyableLink___01Dwn)}
          >
            {hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? "Thoughts"
              : "Thoughts"}
          </CopyableLink>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__mAsVt)}>
        <p.Stack
          as={p.PlasmicLink}
          hasGap={true}
          className={classNames(projectcss.a, sty.link__njyQn)}
          component={Link}
          href={
            hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? ("/pto" as const)
              : undefined
          }
          platform={"nextjs"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__dx4Ep)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9Rm6
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "🤝"
                : "🤝"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___1DI)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___013H5
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "working with me"
                : "working with me"}
            </div>
          </p.Stack>
        </p.Stack>

        {(
          hasVariant(globalVariants, "screen", "tabletOrSmaller") ? true : true
        ) ? (
          <CopyableLink
            className={classNames("__wab_instance", sty.copyableLink___0JTd)}
          >
            {hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? "Thoughts"
              : "Thoughts"}
          </CopyableLink>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__mHtEt)}>
        <p.Stack
          as={p.PlasmicLink}
          hasGap={true}
          className={classNames(projectcss.a, sty.link__qpzgf)}
          component={Link}
          href={
            hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? ("/portfolio" as const)
              : undefined
          }
          platform={"nextjs"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__cbLec)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aFxAx
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "🖌"
                : "🖌"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eghJp)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uRdGa
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "portfolio"
                : "portfolio"}
            </div>
          </p.Stack>
        </p.Stack>

        {(
          hasVariant(globalVariants, "screen", "tabletOrSmaller") ? true : true
        ) ? (
          <CopyableLink
            className={classNames("__wab_instance", sty.copyableLink__csas5)}
          >
            {hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? "Thoughts"
              : "Thoughts"}
          </CopyableLink>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___8MIxG)}>
        <p.Stack
          as={p.PlasmicLink}
          hasGap={true}
          className={classNames(projectcss.a, sty.link___4Ndgz)}
          component={Link}
          href={
            hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? ("/learningplan" as const)
              : undefined
          }
          platform={"nextjs"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__oyNp)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kEdVh
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "📓"
                : "📓"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6Tmr)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sNNt8
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOrSmaller")
                ? "learning plan"
                : "learning plan"}
            </div>
          </p.Stack>
        </p.Stack>

        {(
          hasVariant(globalVariants, "screen", "tabletOrSmaller") ? true : true
        ) ? (
          <CopyableLink
            className={classNames("__wab_instance", sty.copyableLink__hltF)}
          >
            {hasVariant(globalVariants, "screen", "tabletOrSmaller")
              ? "Thoughts"
              : "Thoughts"}
          </CopyableLink>
        ) : null}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeader__Fetches;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
