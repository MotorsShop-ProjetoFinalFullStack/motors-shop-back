import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Announcement } from "../../entities/announcement.entitie"
import { TAllAnnouncementResponse } from "../../interfaces/announcement.interfaces"
import { announcementMultipleResponseSchema } from "../../schemas/announcement.schemas"

const listAnnouncementByTokenService = async (userId: string): Promise<TAllAnnouncementResponse> => {

    const announcementsRepository: Repository<Announcement> = AppDataSource.getRepository(Announcement)

    const findAnnouncements: Announcement[] = await announcementsRepository.find({
        relations: {
            user: true
        },
        where: {
            user: {
                id: userId
            }
        }
    })

    const announcements: TAllAnnouncementResponse = announcementMultipleResponseSchema.parse(findAnnouncements)

    return announcements

}

export {
    listAnnouncementByTokenService
}