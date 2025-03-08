"use client";

import DefaultLayout from "@/components/DefaultLayout";
import styled from "@emotion/styled";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20%;
  padding-left: 20%;
  padding-bottom: 50px;
  padding-top: 20px;
`;

export default function AboutPage() {
  return (
    <DefaultLayout>
      <ContentContainer>
        <span className="text-slate-800 text-3xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet risus neque. Curabitur quis leo a leo porta cursus. Quisque
          ultrices nec massa a tincidunt. Sed suscipit venenatis sapien, et
          consequat sem eleifend at. Aenean nec auctor risus, iaculis vulputate
          sem. Sed congue cursus felis a vestibulum. Vivamus nec tellus
          consectetur, rutrum sapien accumsan, consectetur libero. Integer
          placerat congue aliquet. Nulla risus metus, consectetur ut enim sed,
          congue scelerisque eros. In tortor nisl, rutrum ac interdum id,
          blandit vitae eros. Duis luctus nisl sit amet nisl sollicitudin, eu
          porttitor risus tristique. Suspendisse maximus nunc quam, vitae
          faucibus lacus facilisis eget. Aliquam vehicula felis sit amet urna
          vehicula, in dapibus dui euismod. Quisque vehicula egestas tortor, ac
          volutpat lectus fermentum ut. Proin vel imperdiet enim. Phasellus eget
          dictum tortor, ut ultricies ligula. Mauris ultrices mauris lacinia
          enim malesuada porttitor. Cras cursus diam a iaculis finibus. In hac
          habitasse platea dictumst. Vivamus mattis neque eu ex convallis
          sagittis. Aliquam vitae est iaculis, iaculis ante vel, consequat urna.
          Suspendisse malesuada nibh elit, eu sodales justo maximus et. Duis
          mauris dui, dignissim sit amet velit vitae, rutrum volutpat mi. Cras
          quis orci felis. Morbi gravida purus et mattis rutrum. Suspendisse sed
          vehicula turpis. Ut sit amet orci elit. Pellentesque eu justo a risus
          accumsan auctor nec ut nunc. Proin eu arcu pulvinar, ornare leo id,
          lacinia tellus. Donec vel ultrices lectus. Maecenas posuere ipsum
          iaculis mattis efficitur. Integer ornare nunc quam, quis dictum ligula
          rutrum porttitor. Etiam orci mi, mollis sit amet ex ac, lacinia
          bibendum dolor. Integer convallis tristique tortor, congue molestie
          magna interdum et. Morbi faucibus pretium mauris, nec consectetur est
          molestie nec. In posuere a augue pulvinar sollicitudin. Nam efficitur,
          ante quis pulvinar porta, risus ipsum mattis ante, a pretium ipsum
          mauris id elit. Morbi ut odio sed lectus eleifend faucibus id eu
          ligula. Curabitur in convallis risus. Donec quis condimentum orci, vel
          maximus magna. Nullam vitae tortor ac ex accumsan condimentum eget id
          magna. Sed ac odio vitae nunc sodales lobortis. Nam eros massa,
          laoreet vitae consectetur in, ornare eget neque. Maecenas id molestie
          magna, vitae dictum tortor. Nullam quis urna non ipsum convallis
          consequat. Nulla gravida dui quis pellentesque convallis. Nulla
          facilisi. Donec egestas tellus urna, at lacinia turpis vestibulum id.
          Fusce non velit risus. Duis faucibus turpis id risus feugiat, sit amet
          cursus elit volutpat. Curabitur vel dignissim turpis, a pretium lacus.
          Morbi velit magna, blandit at nisl nec, lobortis condimentum sapien.
        </span>
      </ContentContainer>
    </DefaultLayout>
  );
}
