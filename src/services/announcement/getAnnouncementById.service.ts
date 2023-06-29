import { Repository } from "typeorm"
import { Announcement } from "../../entities/announcement.entitie"
import { AppDataSource } from "../../data-source"
import { TAnnouncementResponse } from "../../interfaces/announcement.interfaces"
import { announcementResponseSchema } from "../../schemas/announcement.schemas"

export const getAnnouncementByIdService = async (announcementId: string): Promise<TAnnouncementResponse> => {
    const announcementRepository: Repository<Announcement> = AppDataSource.getRepository(Announcement)

    const findAnnouncement: Announcement | null = await announcementRepository.findOne({
        where: {
            id: announcementId
        },
        relations: {
            user: true
        }
    })

    const announcement: TAnnouncementResponse = announcementResponseSchema.parse(findAnnouncement)

    return announcement
}