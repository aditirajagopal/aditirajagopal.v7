// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Xs5TeWC1PCRPBorm9sVyK
// Component: KBBASCMD9IY
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
import HomeHeader from "../../HomeHeader"; // plasmic-import: h-KwpRnKbCa/component
import ListItem from "../../ListItem"; // plasmic-import: eSivtCiIyYp/component

import { useScreenVariants as useScreenVariantstwMp01PTCp0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TwMp01pTCp0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_aditirajagopal_v_7.module.css"; // plasmic-import: 5Xs5TeWC1PCRPBorm9sVyK/projectcss
import * as sty from "./PlasmicThoughts.module.css"; // plasmic-import: KBBASCMD9IY/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 9ln7UQtuabq/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 5SKpbgno6I6/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 4QJoZN4Ndzf/icon

export type PlasmicThoughts__VariantMembers = {};

export type PlasmicThoughts__VariantsArgs = {};
type VariantPropType = keyof PlasmicThoughts__VariantsArgs;
export const PlasmicThoughts__VariantProps = new Array<VariantPropType>();

export type PlasmicThoughts__ArgsType = {};
type ArgPropType = keyof PlasmicThoughts__ArgsType;
export const PlasmicThoughts__ArgProps = new Array<ArgPropType>();

export type PlasmicThoughts__OverridesType = {
  root?: p.Flex<"div">;
  homeHeader?: p.Flex<typeof HomeHeader>;
  container?: p.Flex<"div">;
};

export interface DefaultThoughtsProps {
  dataFetches: PlasmicThoughts__Fetches;
}

function PlasmicThoughts__RenderFunc(props: {
  variants: PlasmicThoughts__VariantsArgs;
  args: PlasmicThoughts__ArgsType;
  overrides: PlasmicThoughts__OverridesType;
  dataFetches?: PlasmicThoughts__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstwMp01PTCp0()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Thoughts"}</title>
        <meta key="og:title" property="og:title" content={"Thoughts"} />
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
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7JePu)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zv8Zg)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__yfdz7
                )}
                component={Link}
                href={"/" as const}
                platform={"nextjs"}
              >
                {hasVariant(globalVariants, "screen", "tablet")
                  ? "aditi rajagopal"
                  : "aditi rajagopal"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(projectcss.a, sty.link__nIZoT)}
                component={Link}
                href={"/thoughts" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1TL1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tablet") ? "💭" : "💭"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lSfXe
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "thoughts"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "thoughts"
                    : "thoughts"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(projectcss.a, sty.link__r6NA)}
                component={Link}
                href={
                  "https://docs.google.com/presentation/d/1Ny9aHgFQwBlinCT89NTFoAbBDlvc0e-MScjfvRk9IKs/edit#slide=id.g947f5a6932_1_98" as const
                }
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l1SBi
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tablet") ? "🤝" : "🤝"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6QM
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "working with me"
                    : "working with me"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(projectcss.a, sty.link___9PJBw)}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wnYxm
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tablet") ? "🖌" : "🖌"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__no8G
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "portfolio"
                    : "portfolio"}
                </div>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(projectcss.a, sty.link__nlY1F)}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rKyDj
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tablet") ? "📓" : "📓"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0I2Mo
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "learning"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "learning"
                    : "learning"}
                </div>
              </p.PlasmicLink>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9E8Sn)}
          >
            <HomeHeader
              data-plasmic-name={"homeHeader"}
              data-plasmic-override={overrides.homeHeader}
              className={classNames("__wab_instance", sty.homeHeader)}
              title={
                true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bryew
                    )}
                  >
                    {"Thoughts Monthly"}
                  </div>
                ) : null
              }
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(projectcss.all, sty.container)}
            >
              <ListItem
                date={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a6CeL
                    )}
                  >
                    {"April 1, 2020"}
                  </div>
                }
                description={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xuAaD
                    )}
                  >
                    {"3 months later, I'm still blogging"}
                  </div>
                }
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mflpu
                    )}
                  >
                    {"Fourth post"}
                  </div>
                }
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem__rahty)}
                date={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__otf25
                    )}
                  >
                    {"March 1, 2020"}
                  </div>
                }
                description={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yorEx
                    )}
                  >
                    {"2 months later, I'm still blogging."}
                  </div>
                }
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c22R1
                    )}
                  >
                    {"Third post"}
                  </div>
                }
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem__lZd9N)}
                date={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o5RBi
                    )}
                  >
                    {"February 1, 2020"}
                  </div>
                }
                description={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__scGyx
                    )}
                  >
                    {"1 month later, I'm still blogging."}
                  </div>
                }
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qu4L0
                    )}
                  >
                    {"Second post"}
                  </div>
                }
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem___8Kkjb)}
                date={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Fgji
                    )}
                  >
                    {"January 1, 2020"}
                  </div>
                }
                description={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__byeVx
                    )}
                  >
                    {"Hello world"}
                  </div>
                }
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iB07
                    )}
                  >
                    {"Hello world"}
                  </div>
                }
              />
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__f4GJf)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pqmxj)}
              >
                <Icon3Icon
                  className={classNames(projectcss.all, sty.svg__kVMcS)}
                  href={"twitter.com/aditi_rajagopal" as const}
                  role={"img"}
                />

                <Icon2Icon
                  className={classNames(projectcss.all, sty.svg__zadRs)}
                  href={"github.com/aditirajagopal" as const}
                  role={"img"}
                />

                <Icon28Icon
                  className={classNames(projectcss.all, sty.svg__gBxkb)}
                  href={"linkedin.com/in/aditirajagopal" as const}
                  role={"img"}
                />
              </p.Stack>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__v8Ss
                )}
              >
                {"Last Updated: January 2022"}
              </div>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "homeHeader", "container"],
  homeHeader: ["homeHeader"],
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  homeHeader: typeof HomeHeader;
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThoughts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThoughts__VariantsArgs;
    args?: PlasmicThoughts__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicThoughts__Fetches;
  } & Omit<PlasmicThoughts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicThoughts__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicThoughts__ArgProps,
      internalVariantPropNames: PlasmicThoughts__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicThoughts__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThoughts";
  } else {
    func.displayName = `PlasmicThoughts.${nodeName}`;
  }
  return func;
}

export const PlasmicThoughts = Object.assign(
  // Top-level PlasmicThoughts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeHeader: makeNodeComponent("homeHeader"),
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicThoughts
    internalVariantProps: PlasmicThoughts__VariantProps,
    internalArgProps: PlasmicThoughts__ArgProps
  }
);

export default PlasmicThoughts;
/* prettier-ignore-end */
