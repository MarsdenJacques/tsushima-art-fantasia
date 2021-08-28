const galleryText = [
[['「The Whistle」','Palash Bhattacharjee','The whistle is a sound that came from our breath. Our breath does not have borders or '+
'meaning, it just sounds. These whistles prove that we are alive. Any language or color or job '+
'does not matter, we are here, a part of the universe. The sound comes from our lovely '+
'breath is our lovely universal whistle.\n'+
'I collected whistles from immigrant people in Korea: factory workers, teachers, students, '+
'businessmen. I joined their dinners, games and hanging-out, and asked some of them if they '+
'were interested in whistling their favorite song. I recorded and filmed those whistles. '+
'I went to different places in Korea where these immigrants stay. I met lots of unregistered '+
'immigrants who struggle for their livelihood. In the video, the last one minute shows black & '+
'white, where the people were dancing, cooking, and playing Volleyball. They seemed happy, '+
'or they just acted like they were happy. This video is my imaginative expression where I '+
'show some people expressing their memory through the whistle. '], 
['「Find dad in Samman-ri」','Park Hwa Yeon',
'마을에서 나고 자라며 터를 일궈오신 아버지 , 올해 초 이웃집으로 온 스리랑카 이주노동자들 그리고'+
' 다시 , 중동으로 해외근로를 다녀오셨던 아버지의 36 년 전 경험 . 다른 듯 닮아 있는 이들의 삶의 부분'+
' 을 추적해 본다 . 아버지의 과거는 현재의 삼만리를 이야기하고 있었다 . 나에게 있어서 늘 익숙한 ‘고'+
' 향’ 으로써 여겨졌던 마을의 풍경과 사람들의 존재가 새로이 다가온다 . 세대 , 국가를 초월하며 연결되'+
' 고 지속되고 있는 ‘노동하는 삶’ 들 , 마을 안에 자리하고 있었던 또 다른 세계들을 발견하며 삼만리의'+
' 현재를 돌아본다.\n'+
'Sri Lankan migrant workers who started living in neighboring houses since early this year, my'+
' father\'s 36 years ago experience in overseas work to the Middle East, and our village where they'+
' live together ""Samman-ri"".'+
' I look into the ""labor lives"" that are connected and continuing across generations and countries'+
' and at the same time look back at the present of Samman-ri.'],
['「Day and Night of District」','Yooseung Jung',
'Filmed the day and night of the most well-known assembly place og prosititution in Gwangju and'+
' made a 2-channel video. Invites viewers to sense the place where day and night are reversed when'+
' seeing the assembly place during contrasting time zone periods simultaneously. Of course, if the'+
' assembly place is viewed as the lonesome ruins durins the day, it is also a different type of ruins'+
' that attracts people during the night. In this sense, it is virtually impossible to distinguish between the'+
' two spaces. One would rather say that one had not seen the assembly place duing the day. It is'+
' difficult to locate an exit from the harsh exploitation and the vicious cycle of debt in these ruins, but'+
' it is clear that they live in a time and space of the assembly place.'],
['「This Beauty Deserves a More Dramatic Song」','Undine Sommer',
'Like a whiteout, ""This Beauty Deserves a More Dramatic Song"" brings in and out of focus the'+
' director\'s near-fatal car accident during a snowstorm in Canada and seemingly disjunct events in'+
' Hokkaido\'s Daisetzuzan Mountain Range: The construction of the Sounkyo Hydroelectric Power'+
' Plant in 1952 and the Daisetzuzan Sightseeing Road from 1954 until its halt by the Hokkaido'+
' Nature Conservation Society in 1967, the devastation of Daisetzuzan’s primeval forest in 1954'+
' by Typhoon 15, and Seiji Hisamatsu’s 1957 screen adaptation of poet Ujō Noguchi getting lost in'+
' Daisetzuzan\'s dramatic landscape during his search for his love.\n'+
'As an uninvited guest, the director traverses through remembrances, archives and landscapes'+
' deeply affected by settler-colonial actions in Canada and Hokkaido.\n'+
'Ultimately, what does it mean to have sight taken by nature and to take sight of nature? And how'+
' does fueling the desire to see a landscape differ from constructing a road right through it?'+
' Developed on invitation by and with the great support of Sapporo Tenjinyama Art Studio']],
[['「The Whistle」','ボラシ・ポッタチャルジー','その音は、私たちの息遣いから生まれた音です。息には国境も意味もありません。'+
' ただ鳴っているだけです。それは私たちが生きていることを証明してくれます。言葉や肌の色、職業'+
' などは関係ありません。私たちはここにいて、宇宙の一部なのです。私たちの愛らしい息遣いから来'+
' るその音は、私たちの美しい世界の共通の笛の音です。\n'+
'私は韓国に滞在している移民の口笛を集めました。工場労働者、教師、学生、ビジネスマン。'+
' 私は彼らの夕食、ゲーム、たまり場に参加し、彼らの何人かに自分の好きなものを口笛で吹くことに'+
' 興味があるかどうか尋ねました\n'+
'私は彼らの夕食やたまり場に参加し、彼らの好きな曲を口笛で吹くことに興味があるかどうか尋ねま'+
' した。私はそこで人々の口笛を録音し、撮影しました。私は韓国の様々な場所に行きました。かれら'+
' が滞在する場所です。そこでは、生計を立てるために苦労している多くの未登録の移民に会いました。'+
' ビデオは、最後の1 分はモノクロで、人々が踊っているところを撮影しています\n'+
' 人々はダンスをしたり、料理をしたり、バレーボールをしたりしていました。彼らは幸せそうでした。'+
' 楽しそうにしているというか、楽しそうに振舞っているように見えました。このビデオは、人々が記'+
' 憶を口笛で表したものを、さらに私の想像力で補い表現したものです。'], 
['「Find dad in Samman-ri」','パク・ハヨン',
'里で生まれ育ちながら土地を耕してきた父親。今年初め、隣の家に来たスリランカの移住労働者。そ'+
' して父親の36 年前の中東での海外勤務の経験…。 似ている人たちの生き方を追いかけてみる。 父'+
' の過去は現在のサンマンリを物語っているようだ。 私にとっていつもなじみ深い「ふるさと」とされ'+
' てきた村の風景と人々の存在が別の形で迫ってくる。 世代、国家を超越してつながり続けている「労'+
' 働と生活」、村の中にあったもう一つの世界を発見し、故郷「サンマンリ」の現在を見つめ直す。'],
['「Day and Night of District」',
'ジョン・ユスン','光州で最も有名な売春宿の昼と夜を撮影し、2 チャンネルのビデオを制作した。対照的な時間帯の売'+
' 春宿を同時に見せることで、昼と夜が逆転した場所を表現した。寂しい廃墟のような昼間の売春宿は、'+
' 当然、夜はまた違ったタイプの廃墟として人々を惹きつけるだろう。その意味で、本質的に2 つの空'+
' 間を区別することはできない。むしろ、昼間の廃墟のような売春宿は誰も知らないと言っても過言で'+
' はありません。過酷な搾取や借金の悪循環からの出口をこの廃墟に見出すことは難しいが、彼らは確かにそこで生きている。'],
['「この美しさにはもっと壮大な曲がふさわしい」','ウンディネ ゾマー',
'"監督自身がカナダの吹雪の中体験した自動車事故、北海道の大雪山系で起きた一見バラバラな出来事'+
' が、「この美しさにはもっと壮大な曲がふさわしい / This Beauty Deserves a More Dramatic Song」'+
' ではまるでホワイトアウトのように見え隠れする。1952 年に層雲峡水力発電所が建設、1954 年に'+
' 大雪山観光道路が建設され、1967 年に北海道自然保護協会によって中止されるまでの経緯、1954'+
' 年の台風15 号による大雪山原生林の破壊、そして1957 年に久松誠司が映画化した詩人・野口雨情'+
' が大雪山の荒涼とした風景の中に迷い込み、愛を探す姿\n'+
'招かれざるものとして監督は、カナダと北海道の入植者による植民地支配の影響を色濃く受けた記憶、'+
' 記録、風景を旅します\n'+
'自然に目を奪われ、自然を目に']]
]

export default galleryText